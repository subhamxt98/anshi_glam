import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './css/order-success.css'

const OrderSuccessPage = () => {
  const location = useLocation()
  const { paymentId, amount, orderId } = location.state || {}

  return (
    <div className="order-success-page">
      <div className="container py-5">
        <div className="order-success-card">
          <div className="order-success-icon">
            <i className="bi bi-check-circle-fill"></i>
          </div>

          <h1 className="order-success-title">Payment Successful!</h1>
          <p className="order-success-desc">
            Thank you for your purchase. Your order has been confirmed.
          </p>

          {(paymentId || amount || orderId) && (
            <div className="order-success-details">
              {orderId && (
                <div className="order-success-row">
                  <span>Order ID</span>
                  <strong>{orderId}</strong>
                </div>
              )}
              {paymentId && (
                <div className="order-success-row">
                  <span>Payment ID</span>
                  <strong>{paymentId}</strong>
                </div>
              )}
              {amount && (
                <div className="order-success-row">
                  <span>Amount Paid</span>
                  <strong>₹{amount.toLocaleString('en-IN')}</strong>
                </div>
              )}
            </div>
          )}

          <div className="order-success-actions">
            <Link to="/shop" className="order-success-btn primary">
              Continue Shopping
            </Link>
            <Link to="/" className="order-success-btn secondary">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccessPage