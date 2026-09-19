import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './css/login.css'
import banner from '../assets/banner.jpeg'

const Login = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()
  const { login, register } = useAuth()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}

    if (isSignup && !formData.name.trim()) {
      newErrors.name = 'Please enter your full name'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (isSignup) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password'
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = 'You must agree to the terms'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      if (isSignup) {
        await register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
      } else {
        await login({
          email: formData.email,
          password: formData.password,
        })
      }
      navigate('/')
    } catch (err) {
      setErrors({ general: err?.message || 'Something went wrong. Try again.' })
    } finally {
      setLoading(false)
    }
  }

  const toggleMode = () => {
    setIsSignup((prev) => !prev)
    setErrors({})
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    })
  }

  return (
    <div className="glam-auth-page">
      <div className="glam-bg">
        <span className="glam-glow glow-1"></span>
        <span className="glam-glow glow-2"></span>
        <span className="glam-glow glow-3"></span>
      </div>

      <div className="glam-auth-card">
        {/* ===== LEFT — Brand / Banner panel ===== */}
        <aside className="glam-side">
          <div
            className="glam-side-banner"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(10,8,8,0.55) 0%, rgba(10,8,8,0.9) 100%), url(${banner})`,
            }}
          >
            <div className="glam-side-overlay"></div>

            <div className="glam-side-top">
              <Link to="/" className="glam-logo">
                <div className="glam-logo-mark">
                  <img src={banner} alt="ANSHIÉ's GLAM" />
                </div>
                <div className="glam-logo-text">
                  <span className="glam-logo-brand">ANSHIÉ's</span>
                  <span className="glam-logo-sub">GLAM</span>
                </div>
              </Link>
            </div>

            <div className="glam-side-body">
              <span className="glam-badge">BEAUTY DRIVES CONFIDENCE</span>
              <h2 className="glam-side-title">
                {isSignup ? 'Join the ANSHIÉ Family' : 'Glow Begins Here'}
              </h2>
              <p className="glam-side-desc">
                {isSignup
                  ? 'Create your account and unlock exclusive beauty deals, early access & personalised picks.'
                  : 'Sign in to explore premium cosmetics crafted just for you.'}
              </p>

              <ul className="glam-features">
                <li><i className="bi bi-truck"></i> Free shipping over ₹999</li>
                <li><i className="bi bi-gift"></i> Exclusive member rewards</li>
                <li><i className="bi bi-shield-check"></i> 100% authentic products</li>
              </ul>
            </div>

            <div className="glam-side-foot">
              <div className="glam-socials">
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-youtube"></i>
              </div>
              <p>© {new Date().getFullYear()} ANSHIÉ's GLAM</p>
            </div>
          </div>
        </aside>

        {/* ===== RIGHT — Form panel ===== */}
        <section className="glam-form-panel">
          <header className="glam-form-head">
            <h3>{isSignup ? 'Create Account' : 'Welcome Back'}</h3>
            <p>
              {isSignup ? 'Already have an account?' : "Don't have an account yet?"}{' '}
              <button type="button" className="glam-switch" onClick={toggleMode}>
                {isSignup ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </header>

          <div className="glam-tabs">
            <button
              type="button"
              className={`glam-tab ${!isSignup ? 'active' : ''}`}
              onClick={() => (!isSignup ? null : toggleMode())}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`glam-tab ${isSignup ? 'active' : ''}`}
              onClick={() => (isSignup ? null : toggleMode())}
            >
              Sign Up
            </button>
            <span className={`glam-tab-pill ${isSignup ? 'right' : 'left'}`} />
          </div>

          {errors.general && (
            <div className="glam-alert">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="glam-form" noValidate>
            {isSignup && (
              <div className="glam-field">
                <label>Full Name</label>
                <div className={`glam-input ${errors.name ? 'error' : ''}`}>
                  <i className="bi bi-person"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="Aisha Sharma"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                {errors.name && <span className="glam-err">{errors.name}</span>}
              </div>
            )}

            <div className="glam-field">
              <label>Email Address</label>
              <div className={`glam-input ${errors.email ? 'error' : ''}`}>
                <i className="bi bi-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <span className="glam-err">{errors.email}</span>}
            </div>

            <div className="glam-field">
              <label>Password</label>
              <div className={`glam-input ${errors.password ? 'error' : ''}`}>
                <i className="bi bi-lock"></i>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="glam-eye"
                  onClick={() => setShowPassword((p) => !p)}
                  tabIndex={-1}
                >
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </button>
              </div>
              {errors.password && <span className="glam-err">{errors.password}</span>}
            </div>

            {isSignup && (
              <div className="glam-field">
                <label>Confirm Password</label>
                <div className={`glam-input ${errors.confirmPassword ? 'error' : ''}`}>
                  <i className="bi bi-shield-lock"></i>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="glam-eye"
                    onClick={() => setShowConfirmPassword((p) => !p)}
                    tabIndex={-1}
                  >
                    <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="glam-err">{errors.confirmPassword}</span>
                )}
              </div>
            )}

            {!isSignup ? (
              <div className="glam-row">
                <label className="glam-check">
                  <input type="checkbox" />
                  <span className="glam-check-box"></span>
                  <span>Remember me</span>
                </label>
                <button type="button" className="glam-forgot">Forgot Password?</button>
              </div>
            ) : (
              <div className="glam-field">
                <label className="glam-check">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <span className="glam-check-box"></span>
                  <span>
                    I agree to the <a href="#!">Terms</a> & <a href="#!">Privacy Policy</a>
                  </span>
                </label>
                {errors.agreeTerms && (
                  <span className="glam-err d-block mt-1">{errors.agreeTerms}</span>
                )}
              </div>
            )}

            <button type="submit" className="glam-submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="glam-spinner"></span> Please wait...
                </>
              ) : (
                <>
                  {isSignup ? 'Create Account' : 'Sign In'}
                  <i className="bi bi-arrow-right"></i>
                </>
              )}
            </button>

            <div className="glam-divider"><span>or continue with</span></div>

            <div className="glam-social">
              <button type="button" className="glam-social-btn">
                <i className="bi bi-google"></i> Google
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Login