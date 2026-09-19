import React from 'react'
import { Link } from 'react-router-dom'
import './css/footer.css'
import logo from '../../assets/banner.jpeg'   // ✅ same banner as logo

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home', icon: 'bi-house-heart' },
    { path: '/shop', label: 'Shop', icon: 'bi-bag-heart' },
    { path: '/about', label: 'About Us', icon: 'bi-stars' },
    { path: '/contact', label: 'Contact', icon: 'bi-chat-heart' },
  ]

  const customerService = [
    { path: '/login', label: 'Login', icon: 'bi-person-heart' },
    { path: '/register', label: 'Register', icon: 'bi-person-plus' },
    { path: '/cart', label: 'My Cart', icon: 'bi-bag' },
    { path: '/orders', label: 'My Orders', icon: 'bi-box-seam' },
  ]

  const helpLinks = [
    { label: 'FAQs', icon: 'bi-question-circle' },
    { label: 'Shipping Info', icon: 'bi-truck' },
    { label: 'Returns & Refunds', icon: 'bi-arrow-repeat' },
    { label: 'Privacy Policy', icon: 'bi-shield-check' },
    { label: 'Terms & Conditions', icon: 'bi-file-earmark-text' },
  ]

  const socialLinks = [
    { icon: 'bi-instagram', label: 'Instagram', color: '#E1306C' },
    { icon: 'bi-facebook', label: 'Facebook', color: '#1877F2' },
    { icon: 'bi-twitter-x', label: 'Twitter', color: '#FFFFFF' },
    { icon: 'bi-youtube', label: 'YouTube', color: '#FF0000' },
  ]

  return (
    <footer className="ishani-footer">

      {/* ===== CUTE TOP WAVE ===== */}
      <div className="ishani-footer-wave" />

      <div className="container">

        {/* ===== MAIN FOOTER ROW ===== */}
        <div className="row g-5 py-5">

          {/* ===== BRAND COLUMN ===== */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="ishani-footer-logo d-flex align-items-center gap-2 text-decoration-none mb-3">
              <div className="ishani-footer-logo-img">
                <img src={logo} alt="ANSHIÉ's GLAM" />
              </div>
              <div className="d-flex flex-column lh-1">
                <span className="ishani-footer-brand">ANSHIÉ's</span>
                <span className="ishani-footer-tagline">GLAM</span>
              </div>
            </Link>

            <p className="ishani-footer-desc mb-4">
              Premium cosmetics crafted for the modern woman.
              Beauty redefined with elegance, quality, and care.
            </p>

            {/* ✅ Cute Social Icons */}
            <div className="ishani-footer-socials d-flex gap-3">
              {socialLinks.map((social) => (
                <span
                  key={social.label}
                  className="ishani-footer-social"
                  style={{ '--social-color': social.color }}
                  aria-label={social.label}
                  title={social.label}
                >
                  <i className={`bi ${social.icon}`}></i>
                </span>
              ))}
            </div>
          </div>

          {/* ===== QUICK LINKS ===== */}
          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="ishani-footer-heading">
              <span className="ishani-heading-icon">
                <i className="bi bi-heart-fill"></i>
              </span>
              Quick Links
            </h4>
            <ul className="ishani-footer-list list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="ishani-footer-link">
                    <i className={`bi ${link.icon}`}></i>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== CUSTOMER SERVICE ===== */}
          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="ishani-footer-heading">
              <span className="ishani-heading-icon">
                <i className="bi bi-emoji-smile-fill"></i>
              </span>
              Customer Service
            </h4>
            <ul className="ishani-footer-list list-unstyled">
              {customerService.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="ishani-footer-link">
                    <i className={`bi ${link.icon}`}></i>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== HELP ===== */}
          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="ishani-footer-heading">
              <span className="ishani-heading-icon">
                <i className="bi bi-life-preserver"></i>
              </span>
              Help
            </h4>
            <ul className="ishani-footer-list list-unstyled">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <span className="ishani-footer-link ishani-footer-dummy">
                    <i className={`bi ${link.icon}`}></i>
                    <span>{link.label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== CONTACT ===== */}
          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="ishani-footer-heading">
              <span className="ishani-heading-icon">
                <i className="bi bi-chat-dots-fill"></i>
              </span>
              Get in Touch
            </h4>
            <ul className="ishani-footer-list list-unstyled">
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <span>Mumbai, MH, India</span>
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
                <span>hello@anshiesglam.com</span>
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i>
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="ishani-footer-bottom d-flex flex-wrap justify-content-between align-items-center py-4 gap-3">
          <p className="ishani-footer-copy mb-0">
            Made with <i className="bi bi-heart-fill ishani-heart"></i> by <span>ANSHIÉ's GLAM</span> © {currentYear}
          </p>

          <div className="ishani-footer-payments d-flex align-items-center gap-3">
            <span className="ishani-footer-pay-label">
              <i className="bi bi-shield-lock-fill me-1"></i>
              Secure Payments
            </span>
            <div className="ishani-footer-pay-icons d-flex gap-2">
              <span className="ishani-pay-chip">
                <i className="bi bi-credit-card-2-front-fill"></i>
                <span>Card</span>
              </span>
              <span className="ishani-pay-chip">
                <i className="bi bi-shield-check"></i>
                <span>Razorpay</span>
              </span>
              <span className="ishani-pay-chip">
                <i className="bi bi-phone-fill"></i>
                <span>UPI</span>
              </span>
              <span className="ishani-pay-chip">
                <i className="bi bi-cash-stack"></i>
                <span>COD</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer