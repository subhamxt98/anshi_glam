// ============================================
// RAZORPAY PAYMENT ROUTES
// Location: backend/routes/payment.js
// ============================================

const express = require('express')
const crypto = require('crypto')
const Razorpay = require('razorpay')
const router = express.Router()

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

// ============================================
// POST /api/payment/create-order
// ============================================
router.post('/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt } = req.body

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: 'Invalid amount' })
    }

    const options = {
      amount: Math.round(amount * 100), // ₹ → paise
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: 1,
    }

    const order = await razorpay.orders.create(options)

    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    })
  } catch (err) {
    console.error('❌ Razorpay order error:', err)
    res.status(500).json({
      message: err.error?.description || err.message || 'Failed to create order',
    })
  }
})

// ============================================
// POST /api/payment/verify
// ============================================
router.post('/verify', async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: 'Missing payment details',
      })
    }

    // Signature verify
    const body = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex')

    const isAuthentic = expectedSignature === razorpay_signature

    if (!isAuthentic) {
      return res.status(400).json({
        success: false,
        message: 'Payment verification failed',
      })
    }

    res.json({
      success: true,
      message: 'Payment verified successfully',
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    })
  } catch (err) {
    console.error('❌ Verify error:', err)
    res.status(500).json({ success: false, message: err.message })
  }
})

module.exports = router