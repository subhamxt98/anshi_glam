import React, { useState } from 'react'
import './css/contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Please enter your name'

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit number'
    }

    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject'

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      // TODO: Replace with your actual API call
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      await new Promise((r) => setTimeout(r, 1200)) // demo delay
      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setErrors({ general: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'Visit Us',
      lines: ['123 Beauty Street, Bandra West', 'Mumbai, Maharashtra 400050'],
    },
    {
      icon: 'bi-telephone',
      title: 'Call Us',
      lines: ['+91 98765 43210', 'Mon–Sat, 10 AM – 7 PM'],
    },
    {
      icon: 'bi-envelope',
      title: 'Email Us',
      lines: ['hello@anshiesglam.com', 'support@anshiesglam.com'],
    },
  ]

  return (
    <div className="glam-contact-page">
      {/* Soft background glows */}
      <div className="glam-contact-bg">
        <span className="glow glow-1"></span>
        <span className="glow glow-2"></span>
      </div>

      {/* ===== HERO ===== */}
      <section className="glam-contact-hero">
        <span className="glam-contact-badge">GET IN TOUCH</span>
        <h1 className="glam-contact-title">We'd Love to Hear From You</h1>
        <p className="glam-contact-sub">
          Questions, feedback or just want to say hi? Our team is here to help you glow.
        </p>
      </section>

      {/* ===== MAIN GRID ===== */}
      <section className="glam-contact-wrap">
        {/* LEFT — Info cards */}
        <aside className="glam-contact-info">
          {contactInfo.map((item, idx) => (
            <div className="glam-info-card" key={idx}>
              <span className="glam-info-icon">
                <i className={`bi ${item.icon}`}></i>
              </span>
              <div className="glam-info-text">
                <h4>{item.title}</h4>
                {item.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="glam-info-socials">
            <span className="glam-info-socials-label">Follow Us</span>
            <div className="glam-info-socials-row">
              <a href="#!" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#!" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#!" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
              <a href="#!" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </aside>

        {/* RIGHT — Form */}
        <div className="glam-contact-form-card">
          <header className="glam-form-head">
            <h3>Send a Message</h3>
            <p>Fill in the details and we'll get back within 24 hours.</p>
          </header>

          {success && (
            <div className="glam-alert success">
              <i className="bi bi-check-circle-fill me-2"></i>
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {errors.general && (
            <div className="glam-alert error">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="glam-contact-form" noValidate>
            {/* Row 1 */}
            <div className="glam-row-2">
              <div className="glam-field">
                <label>Full Name</label>
                <div className={`glam-input ${errors.name ? 'error' : ''}`}>
                  <i className="bi bi-person"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                {errors.name && <span className="glam-err">{errors.name}</span>}
              </div>

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
            </div>

            {/* Row 2 */}
            <div className="glam-row-2">
              <div className="glam-field">
                <label>Phone (Optional)</label>
                <div className={`glam-input ${errors.phone ? 'error' : ''}`}>
                  <i className="bi bi-telephone"></i>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                  />
                </div>
                {errors.phone && <span className="glam-err">{errors.phone}</span>}
              </div>

              <div className="glam-field">
                <label>Subject</label>
                <div className={`glam-input ${errors.subject ? 'error' : ''}`}>
                  <i className="bi bi-chat-left-text"></i>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                {errors.subject && <span className="glam-err">{errors.subject}</span>}
              </div>
            </div>

            {/* Message */}
            <div className="glam-field">
              <label>Message</label>
              <div className={`glam-input textarea ${errors.message ? 'error' : ''}`}>
                <i className="bi bi-pencil"></i>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              {errors.message && <span className="glam-err">{errors.message}</span>}
            </div>

            <button type="submit" className="glam-submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="glam-spinner"></span> Sending...
                </>
              ) : (
                <>
                  Send Message
                  <i className="bi bi-arrow-right"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* ===== MAP / CTA ===== */}
      <section className="glam-contact-cta">
        <div className="glam-cta-inner">
          <h3>Prefer to visit our store?</h3>
          <p>Come experience ANSHIÉ's GLAM in person.</p>
          <a href="#!" className="glam-cta-btn">
            <i className="bi bi-geo-alt"></i> Get Directions
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact