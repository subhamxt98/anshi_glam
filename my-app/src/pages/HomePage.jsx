import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/home.css'

const HomePage = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  // ===== CATEGORIES =====
  const categories = [
    { id: 1, name: 'Lips', count: 24, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=600&fit=crop&q=85' },
    { id: 2, name: 'Eyes', count: 18, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=600&fit=crop&q=85' },
    { id: 3, name: 'Face', count: 32, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=600&fit=crop&q=85' },
    { id: 4, name: 'Skincare', count: 28, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=600&fit=crop&q=85' },
  ]

  // ===== PRODUCTS =====
  const products = [
    { id: 1, name: 'Velvet Matte Lipstick', category: 'Lips', price: 1299, oldPrice: 1599, rating: 4.8, reviews: 234, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop&q=85', badge: 'Best Seller' },
    { id: 2, name: 'Rose Glow Serum', category: 'Skincare', price: 2499, oldPrice: 2999, rating: 4.9, reviews: 189, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&q=85', badge: 'New' },
    { id: 3, name: 'Luxury Eyeshadow Palette', category: 'Eyes', price: 1899, oldPrice: 2299, rating: 4.7, reviews: 156, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop&q=85', badge: 'Trending' },
    { id: 4, name: 'Hydrating Face Cream', category: 'Skincare', price: 1699, oldPrice: 1999, rating: 4.8, reviews: 312, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop&q=85', badge: '' },
    { id: 5, name: 'Silk Foundation', category: 'Face', price: 2199, oldPrice: 2599, rating: 4.6, reviews: 98, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&q=85', badge: 'Best Seller' },
    { id: 6, name: 'Volumizing Mascara', category: 'Eyes', price: 999, oldPrice: 1299, rating: 4.9, reviews: 421, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&q=85', badge: 'New' },
    { id: 7, name: 'Glow Highlighter', category: 'Face', price: 1499, oldPrice: 1799, rating: 4.7, reviews: 178, image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=600&fit=crop&q=85', badge: '' },
    { id: 8, name: 'Nourishing Hair Oil', category: 'Hair', price: 899, oldPrice: 1199, rating: 4.8, reviews: 267, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop&q=85', badge: 'Trending' },
  ]

  // ===== TESTIMONIALS =====
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: "ANSHIÉ's GLAM has completely transformed my beauty routine. The quality is unmatched and the products feel so luxurious!",
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=85',
    },
    {
      id: 2,
      name: 'Ananya Verma',
      location: 'Delhi',
      rating: 5,
      text: 'The Rose Glow Serum is a game-changer. My skin has never looked better. Highly recommend to everyone!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=85',
    },
    {
      id: 3,
      name: 'Kavya Reddy',
      location: 'Bangalore',
      rating: 5,
      text: "Beautiful packaging, fast delivery, and amazing products. ANSHIÉ's GLAM is now my go-to beauty brand.",
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&q=85',
    },
  ]

  // ===== INSTAGRAM =====
  const instagramImages = [
    'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&h=400&fit=crop&q=85',
    'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop&q=85',
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&q=85',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&q=85',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop&q=85',
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&q=85',
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <div className="home-page">

      {/* ============ HERO ============ */}
      <section className="hero-section d-flex align-items-center">
        <div className="hero-bg" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 col-xl-7">
              <span className="hero-label d-inline-block">New Collection 2025</span>
              <h1 className="hero-title">
                Beauty <span className="italic">Redefined</span>
                <br />
                For The Modern Woman
              </h1>
              <p className="hero-desc">
                Discover premium cosmetics crafted with care, designed for elegance.
                Experience luxury in every detail with ANSHIÉ's GLAM.
              </p>
              <div className="hero-actions d-flex flex-wrap gap-3">
                <Link to="/shop" className="hero-btn-primary">
                  Shop Now <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/about" className="hero-btn-secondary">
                  Our Story
                </Link>
              </div>
              <div className="hero-stats d-flex flex-wrap align-items-center">
                <div className="hero-stat">
                  <span className="hero-stat-number">50K+</span>
                  <span className="hero-stat-label">Happy Customers</span>
                </div>
                <div className="hero-stat-divider" />
                <div className="hero-stat">
                  <span className="hero-stat-number">200+</span>
                  <span className="hero-stat-label">Premium Products</span>
                </div>
                <div className="hero-stat-divider" />
                <div className="hero-stat">
                  <span className="hero-stat-number">4.9</span>
                  <span className="hero-stat-label">Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST BADGES ============ */}
      <section className="trust-section">
        <div className="container">
          <div className="row g-3 g-md-4">
            {[
              { icon: 'bi-truck', title: 'Free Shipping', desc: 'On orders above ₹999' },
              { icon: 'bi-arrow-repeat', title: 'Easy Returns', desc: '7 days return policy' },
              { icon: 'bi-shield-check', title: 'Secure Payment', desc: '100% safe & secure' },
              { icon: 'bi-headset', title: '24/7 Support', desc: 'Always here to help' },
            ].map((badge, i) => (
              <div className="col-6 col-lg-3" key={i}>
                <div className="trust-item d-flex align-items-center gap-3">
                  <i className={`bi ${badge.icon} trust-icon`}></i>
                  <div>
                    <h4 className="trust-title">{badge.title}</h4>
                    <p className="trust-desc">{badge.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="categories-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">Shop By Category</span>
            <h2 className="section-title">
              Find Your <span className="italic">Perfect</span> Match
            </h2>
            <p className="section-desc mx-auto" style={{ maxWidth: '600px' }}>
              Explore our curated collections designed for every beauty need
            </p>
          </div>

          <div className="row g-3 g-md-4">
            {categories.map((cat) => (
              <div className="col-6 col-lg-3" key={cat.id}>
                <Link to={`/shop?category=${cat.name.toLowerCase()}`} className="category-card d-block">
                  <div className="category-image">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="w-100 h-100 object-fit-cover"
                    />
                    <div className="category-overlay" />
                  </div>
                  <div className="category-info">
                    <h3 className="category-name">{cat.name}</h3>
                    <span className="category-count">{cat.count} Products</span>
                  </div>
                  <div className="category-arrow">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BEST SELLERS ============ */}
      <section className="products-section">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3">
            <div>
              <span className="section-label">Most Loved</span>
              <h2 className="section-title mb-0">
                Best <span className="italic">Sellers</span>
              </h2>
            </div>
            <Link to="/shop" className="view-all-link">
              View All <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="row g-3 g-md-4">
            {products.slice(0, 4).map((product) => (
              <div className="col-6 col-lg-3" key={product.id}>
                <Link to={`/product/${product.id}`} className="product-card d-block">
                  <div className="product-image-wrap">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="product-image w-100 h-100 object-fit-cover"
                    />
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                    <div className="product-actions d-flex flex-column gap-2">
                      <button className="product-action-btn" aria-label="Add to wishlist">
                        <i className="bi bi-heart"></i>
                      </button>
                      <button className="product-action-btn" aria-label="Quick view">
                        <i className="bi bi-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating d-flex align-items-center gap-2">
                      <i className="bi bi-star-fill"></i>
                      <span>{product.rating}</span>
                      <span className="product-reviews">({product.reviews})</span>
                    </div>
                    <div className="product-price-row d-flex align-items-center gap-2">
                      <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
                      <span className="product-old-price">₹{product.oldPrice.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BRAND STORY ============ */}
      <section className="brand-story-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="brand-story-images">
                <div className="brand-image-1">
                  <img
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=700&fit=crop&q=85"
                    alt="Brand Story"
                    loading="lazy"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="brand-image-2">
                  <img
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=500&fit=crop&q=85"
                    alt="Brand Story 2"
                    loading="lazy"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="brand-badge">
                  <span className="brand-badge-number">10+</span>
                  <span className="brand-badge-text">Years of Excellence</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">
                Crafted With <span className="italic">Love</span>,
                <br />
                Made For You
              </h2>
              <p className="brand-story-desc">
                At ANSHIÉ's GLAM, we believe beauty is more than just makeup —
                it's a celebration of your unique self. Every product is crafted
                with premium ingredients, tested with care, and designed to make
                you feel confident and radiant.
              </p>
              <p className="brand-story-desc">
                From our humble beginnings to becoming a trusted name in premium
                beauty, ANSHIÉ's GLAM has been fueled by one simple mission: to
                redefine beauty for the modern woman.
              </p>

              <div className="row g-3 my-4">
                {['Cruelty-Free Products', 'Premium Ingredients', 'Dermatologist Tested', 'Eco-Friendly Packaging'].map((f, i) => (
                  <div className="col-6" key={i}>
                    <div className="brand-feature d-flex align-items-center gap-2">
                      <i className="bi bi-check2-circle"></i>
                      <span>{f}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="brand-story-btn">
                Learn More <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NEW ARRIVALS ============ */}
      <section className="products-section new-arrivals-section">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3">
            <div>
              <span className="section-label">Just Dropped</span>
              <h2 className="section-title mb-0">
                New <span className="italic">Arrivals</span>
              </h2>
            </div>
            <Link to="/shop" className="view-all-link">
              View All <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="row g-3 g-md-4">
            {products.slice(4, 8).map((product) => (
              <div className="col-6 col-lg-3" key={product.id}>
                <Link to={`/product/${product.id}`} className="product-card d-block">
                  <div className="product-image-wrap">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="product-image w-100 h-100 object-fit-cover"
                    />
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                    <div className="product-actions d-flex flex-column gap-2">
                      <button className="product-action-btn" aria-label="Add to wishlist">
                        <i className="bi bi-heart"></i>
                      </button>
                      <button className="product-action-btn" aria-label="Quick view">
                        <i className="bi bi-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating d-flex align-items-center gap-2">
                      <i className="bi bi-star-fill"></i>
                      <span>{product.rating}</span>
                      <span className="product-reviews">({product.reviews})</span>
                    </div>
                    <div className="product-price-row d-flex align-items-center gap-2">
                      <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
                      <span className="product-old-price">₹{product.oldPrice.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="testimonials-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">What They Say</span>
            <h2 className="section-title">
              Loved By <span className="italic">Thousands</span>
            </h2>
            <p className="section-desc mx-auto" style={{ maxWidth: '600px' }}>
              Real stories from real customers who trust ANSHIÉ's GLAM
            </p>
          </div>

          <div className="row g-3 g-md-4">
            {testimonials.map((t) => (
              <div className="col-md-6 col-lg-4" key={t.id}>
                <div className="testimonial-card h-100">
                  <div className="testimonial-quote">
                    <i className="bi bi-quote"></i>
                  </div>
                  <div className="testimonial-stars mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <i className="bi bi-star-fill" key={i}></i>
                    ))}
                  </div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author d-flex align-items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      className="testimonial-avatar"
                    />
                    <div>
                      <h4 className="testimonial-name">{t.name}</h4>
                      <span className="testimonial-location">{t.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INSTAGRAM ============ */}
      <section className="instagram-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">Follow Us</span>
            <h2 className="section-title">
              @anshie<span className="italic">glam</span>
            </h2>
            <p className="section-desc mx-auto" style={{ maxWidth: '600px' }}>
              Join our community and share your beauty journey
            </p>
          </div>

          <div className="row g-2 g-md-3">
            {instagramImages.map((img, i) => (
              <div className="col-4 col-md-2" key={i}>
                <div className="instagram-item">
                  <img
                    src={img}
                    alt={`Instagram post ${i + 1}`}
                    loading="lazy"
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="instagram-overlay d-flex align-items-center justify-content-center">
                    <i className="bi bi-instagram"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="newsletter-cta-section">
        <div className="container">
          <div className="newsletter-cta-inner">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <h2 className="newsletter-cta-title mb-2">
                  Get <span className="italic">10% Off</span> Your First Order
                </h2>
                <p className="newsletter-cta-desc mb-0">
                  Subscribe to our newsletter for exclusive offers, new arrivals,
                  and beauty tips delivered to your inbox.
                </p>
              </div>
              <div className="col-lg-6">
                <form className="newsletter-cta-form d-flex flex-wrap gap-2" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-cta-input flex-grow-1"
                    required
                  />
                  <button type="submit" className="newsletter-cta-btn">
                    {subscribed ? (
                      <>
                        <i className="bi bi-check2"></i> Subscribed
                      </>
                    ) : (
                      <>
                        Subscribe <i className="bi bi-arrow-right"></i>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage