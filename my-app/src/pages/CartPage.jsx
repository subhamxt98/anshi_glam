import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { handlePayment } from '../utils/razorpay'
import './css/cart.css'

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getSubtotal, clearCart } = useCart()
  const { user, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [paying, setPaying] = useState(false)
  const [error, setError] = useState('')

  // ===== TOTALS =====
  const subtotal = getSubtotal()
  const shipping = subtotal > 999 ? 0 : 99
  const tax = Math.round(subtotal * 0.05) // 5% GST
  const total = subtotal + shipping + tax

  // ===== EMPTY STATE =====
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container py-5">
          <div className="cart-empty">
            <div className="cart-empty-icon">
              <i className="bi bi-bag"></i>
            </div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything yet.</p>
            <Link to="/shop" className="cart-empty-btn">
              Start Shopping <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ===== PAYMENT HANDLER =====
  const handleCheckout = async () => {
    setError('')

    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    setPaying(true)
    await handlePayment({
      amount: total,
      user,
      onSuccess: (data) => {
        clearCart()
        navigate('/order-success', {
          state: { paymentId: data.payment_id, amount: total },
        })
      },
      onFailure: (msg) => {
        setError(msg || 'Payment failed. Please try again.')
      },
    })
    setPaying(false)
  }

  return (
    <div className="cart-page">
      <div className="container py-5">

        {/* ===== HEADER ===== */}
        <div className="cart-header">
          <span className="cart-label">Your Bag</span>
          <h1 className="cart-title">
            Shopping <span className="italic">Cart</span>
          </h1>
          <p className="cart-desc">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your bag
          </p>
        </div>

        <div className="row g-4">

          {/* ===== LEFT — ITEMS ===== */}
          <div className="col-lg-8">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>

                  <div className="cart-item-info">
                    <span className="cart-item-category">{item.category}</span>
                    <h3 className="cart-item-name">{item.name}</h3>
                    <div className="cart-item-rating">
                      <i className="bi bi-star-fill"></i>
                      <span>{item.rating}</span>
                      <span className="cart-item-reviews">({item.reviews})</span>
                    </div>

                    <div className="cart-item-price-row">
                      <span className="cart-item-price">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      {item.oldPrice && (
                        <span className="cart-item-old-price">
                          ₹{item.oldPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        aria-label="Decrease"
                      >
                        <i className="bi bi-dash"></i>
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase"
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>

                    <div className="cart-item-total">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>

                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove"
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions-row">
              <Link to="/shop" className="cart-continue-btn">
                <i className="bi bi-arrow-left"></i> Continue Shopping
              </Link>
              <button className="cart-clear-btn" onClick={clearCart}>
                <i className="bi bi-trash3"></i> Clear Cart
              </button>
            </div>
          </div>

          {/* ===== RIGHT — SUMMARY ===== */}
          <div className="col-lg-4">
            <div className="cart-summary">
              <h3 className="cart-summary-title">Order Summary</h3>

              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              <div className="cart-summary-row">
                <span>Shipping</span>
                <span className={shipping === 0 ? 'free' : ''}>
                  {shipping === 0 ? 'FREE' : `₹${shipping}`}
                </span>
              </div>

              <div className="cart-summary-row">
                <span>Tax (5% GST)</span>
                <span>₹{tax.toLocaleString('en-IN')}</span>
              </div>

              {shipping > 0 && (
                <div className="cart-shipping-note">
                  <i className="bi bi-truck"></i>
                  Add ₹{(1000 - subtotal).toLocaleString('en-IN')} more for FREE shipping
                </div>
              )}

              <div className="cart-summary-divider"></div>

              <div className="cart-summary-row total">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>

              {error && (
                <div className="cart-error">
                  <i className="bi bi-exclamation-triangle-fill"></i>
                  {error}
                </div>
              )}

              <button
                className="cart-checkout-btn"
                onClick={handleCheckout}
                disabled={paying}
              >
                {paying ? (
                  <>
                    <span className="cart-spinner"></span> Processing...
                  </>
                ) : (
                  <>
                    <i className="bi bi-lock-fill"></i>
                    Proceed to Pay ₹{total.toLocaleString('en-IN')}
                  </>
                )}
              </button>

              {!isAuthenticated && (
                <p className="cart-login-note">
                  <i className="bi bi-info-circle"></i>
                  You'll be asked to login before payment
                </p>
              )}

              <div className="cart-secure-note">
                <i className="bi bi-shield-check"></i>
                <span>100% Secure Payments via Razorpay</span>
              </div>

              <div className="cart-payment-icons">
                <i className="bi bi-credit-card-2-front"></i>
                <i className="bi bi-phone"></i>
                <i className="bi bi-bank"></i>
                <i className="bi bi-wallet2"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartPage