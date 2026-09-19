// ============================================
// RAZORPAY PAYMENT UTILITY
// Location: src/utils/razorpay.js
// ============================================

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// ===== Razorpay SDK load karo (dynamic) =====
const loadRazorpaySDK = () => {
  return new Promise((resolve) => {
    // Agar already loaded hai
    if (window.Razorpay) {
      resolve(true)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

// ============================================
// MAIN PAYMENT FUNCTION
// ============================================
export const handlePayment = async ({ amount, user, onSuccess, onFailure }) => {
  try {
    // 1. Razorpay SDK load karo
    const loaded = await loadRazorpaySDK()
    if (!loaded) {
      onFailure('Razorpay SDK failed to load. Check your internet.')
      return
    }

    // 2. Backend se order create karo
    const orderRes = await fetch(`${API}/payment/create-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount,
        receipt: `rcpt_${Date.now()}`,
      }),
    })

    const orderData = await orderRes.json()
    if (!orderRes.ok) {
      onFailure(orderData.message || 'Failed to create payment order')
      return
    }

    // 3. Razorpay checkout options
    const options = {
      key: orderData.keyId,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "ANSHIÉ's GLAM",
      description: `Order payment of ₹${amount}`,
      order_id: orderData.orderId,
      prefill: {
        name: user?.name || '',
        email: user?.email || '',
        contact: user?.phone || '',
      },
      theme: { color: '#3B82F6' },
      modal: {
        ondismiss: () => {
          onFailure('Payment cancelled by user')
        },
      },
      handler: async (response) => {
        // 4. Payment verify karo
        try {
          const verifyRes = await fetch(`${API}/payment/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          })

          const verifyData = await verifyRes.json()

          if (verifyData.success) {
            onSuccess({
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              amount,
            })
          } else {
            onFailure('Payment verification failed')
          }
        } catch (err) {
          console.error('Verify error:', err)
          onFailure('Payment verification error')
        }
      },
    }

    // 5. Razorpay modal open karo
    const rzp = new window.Razorpay(options)
    rzp.on('payment.failed', (resp) => {
      onFailure(resp.error?.description || 'Payment failed')
    })
    rzp.open()
  } catch (err) {
    console.error('Payment error:', err)
    onFailure(err.message || 'Something went wrong')
  }
}