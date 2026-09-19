import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext'
import './css/navbar.css'
import logo from '../../assets/banner.jpeg'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()
  const { getCartCount } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const cartCount = getCartCount()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Route change pe menu auto-close
  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

  // Body scroll lock jab mobile menu open ho
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsMobileOpen(false)
  }

  const closeMenu = () => setIsMobileOpen(false)

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`ishani-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="ishani-nav-inner">

        {/* ===== LOGO ===== */}
        <Link to="/" className="ishani-logo" onClick={closeMenu}>
          <div className="ishani-logo-img">
            <img src={logo} alt="ANSHIÉ's GLAM" />
          </div>
          <div className="ishani-logo-text">
            <span className="ishani-brand">ANSHIÉ's</span>
            <span className="ishani-tagline">GLAM</span>
          </div>
        </Link>

        {/* ===== DESKTOP NAV LINKS ===== */}
        <div className="ishani-nav-links">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`ishani-nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="ishani-right">

          {/* Cart */}
          <Link
            to="/cart"
            className="ishani-cart-btn"
            data-tooltip="View Cart"
            onClick={closeMenu}
          >
            <i className="bi bi-bag-heart"></i>
            {cartCount > 0 && (
              <span className="ishani-cart-badge">{cartCount}</span>
            )}
          </Link>

          {/* Auth */}
          {isAuthenticated ? (
            <div className="dropdown">
              <button className="ishani-user-btn" data-bs-toggle="dropdown">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </button>

              <ul className="dropdown-menu dropdown-menu-end ishani-dropdown">
                {/* User Info Header */}
                <li className="ishani-dropdown-header">
                  <div className="ishani-dropdown-avatar">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div className="ishani-dropdown-userinfo">
                    <span className="ishani-dropdown-name">
                      {user?.name || 'User'}
                    </span>
                    <span className="ishani-dropdown-email">
                      {user?.email || 'user@example.com'}
                    </span>
                  </div>
                </li>

                <li>
                  <hr className="ishani-dropdown-divider" />
                </li>

                <li>
                  <Link
                    to="/profile"
                    className="ishani-dropdown-item"
                    onClick={closeMenu}
                  >
                    <i className="bi bi-person"></i>
                    <span>Profile</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/orders"
                    className="ishani-dropdown-item"
                    onClick={closeMenu}
                  >
                    <i className="bi bi-box-seam"></i>
                    <span>My Orders</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/cart"
                    className="ishani-dropdown-item"
                    onClick={closeMenu}
                  >
                    <i className="bi bi-bag-heart"></i>
                    <span>My Cart</span>
                    {cartCount > 0 && (
                      <span className="ishani-dropdown-badge">{cartCount}</span>
                    )}
                  </Link>
                </li>

                <li>
                  <hr className="ishani-dropdown-divider" />
                </li>

                <li>
                  <button
                    className="ishani-dropdown-item logout-item"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="ishani-auth-icons">
              <Link
                to="/login"
                className="ishani-auth-icon signin"
                data-tooltip="Sign In"
                onClick={closeMenu}
              >
                <i className="bi bi-box-arrow-in-right"></i>
              </Link>
              <Link
                to="/login"
                className="ishani-auth-icon signup"
                data-tooltip="Sign Up"
                onClick={closeMenu}
              >
                <i className="bi bi-person-plus"></i>
              </Link>
            </div>
          )}

          {/* ===== HAMBURGER ===== */}
          <button
            className="ishani-toggle"
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            <i className={`bi ${isMobileOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div className={`ishani-mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <div className="ishani-mobile-inner">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`ishani-mobile-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <i
                  className={`bi ${
                    link.label === 'Home'
                      ? 'bi-house'
                      : link.label === 'Shop'
                      ? 'bi-bag'
                      : link.label === 'About'
                      ? 'bi-info-circle'
                      : 'bi-envelope'
                  }`}
                ></i>
                <span>{link.label}</span>
              </Link>
            )
          })}

          {/* Mobile auth */}
          {!isAuthenticated ? (
            <div className="ishani-mobile-auth">
              <Link
                to="/login"
                className="ishani-mobile-auth-btn signin"
                onClick={closeMenu}
              >
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Sign In</span>
              </Link>
              <Link
                to="/login"
                className="ishani-mobile-auth-btn signup"
                onClick={closeMenu}
              >
                <i className="bi bi-person-plus"></i>
                <span>Sign Up</span>
              </Link>
            </div>
          ) : (
            <div className="ishani-mobile-auth">
              <Link
                to="/profile"
                className="ishani-mobile-auth-btn signin"
                onClick={closeMenu}
              >
                <i className="bi bi-person"></i>
                <span>Profile</span>
              </Link>
              <button
                className="ishani-mobile-auth-btn signup"
                onClick={handleLogout}
              >
                <i className="bi bi-box-arrow-right"></i>
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ===== BACKDROP ===== */}
      {isMobileOpen && (
        <div className="ishani-backdrop" onClick={closeMenu}></div>
      )}
    </nav>
  )
}

export default Navbar