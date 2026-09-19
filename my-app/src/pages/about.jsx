import React from 'react'
import { Link } from 'react-router-dom'
import './css/about.css'

const About = () => {
  // ===== VALUES =====
  const values = [
    {
      icon: 'bi-gem',
      title: 'Premium Quality',
      desc: 'Only the finest ingredients, rigorously tested for purity and performance.',
    },
    {
      icon: 'bi-heart',
      title: 'Cruelty-Free',
      desc: 'Never tested on animals. Beauty with a conscience, always.',
    },
    {
      icon: 'bi-leaf',
      title: 'Eco-Friendly',
      desc: 'Sustainable packaging and responsibly sourced materials.',
    },
    {
      icon: 'bi-shield-check',
      title: 'Dermatologist Tested',
      desc: 'Safe for all skin types, approved by skin experts.',
    },
  ]

  // ===== STATS =====
  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '200+', label: 'Premium Products' },
    { number: '10+', label: 'Years of Excellence' },
    { number: '4.9', label: 'Average Rating' },
  ]

  // ===== TIMELINE =====
  const timeline = [
    { year: '2015', title: 'The Beginning', desc: 'Founded in a small Mumbai studio with a big dream.' },
    { year: '2018', title: 'First Store', desc: 'Opened our first flagship store in Bandra, Mumbai.' },
    { year: '2021', title: 'Going Digital', desc: 'Launched our online store serving all of India.' },
    { year: '2024', title: '50K+ Customers', desc: 'Crossed 50,000 happy customers nationwide.' },
  ]

  // ===== LEADERSHIP =====
  const leadership = [
    {
      name: 'Aarav Sharma',
      role: 'Founder & CEO',
      quote: 'Beauty is confidence, and confidence begins with self-love.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&q=85',
    },
    {
      name: 'Ananya Kapoor',
      role: 'Co-Founder & Creative Director',
      quote: 'Every product we make tells a story of elegance and empowerment.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&q=85',
    },
    {
      name: 'Rohan Mehta',
      role: 'Chief Operating Officer',
      quote: 'Precision and passion — the two pillars of everything we build.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=700&fit=crop&q=85',
    },
    {
      name: 'Sneha Patel',
      role: 'Head of Product Innovation',
      quote: 'Innovation is not about following trends — it\'s about creating them.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=700&fit=crop&q=85',
    },
  ]

  // ===== TEAM =====
  const team = [
    {
      name: 'Riya Sharma',
      role: 'Marketing Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop&q=85',
    },
    {
      name: 'Karan Singh',
      role: 'Lead Formulator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&q=85',
    },
    {
      name: 'Priya Verma',
      role: 'Customer Experience',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop&q=85',
    },
  ]

  // ===== AWARDS =====
  const awards = [
    { icon: 'bi-trophy', year: '2024', title: 'Best Luxury Beauty Brand' },
    { icon: 'bi-award', year: '2023', title: 'Sustainable Packaging Award' },
    { icon: 'bi-star', year: '2022', title: 'Customer Choice Award' },
    { icon: 'bi-patch-check', year: '2021', title: 'Cruelty-Free Certification' },
  ]

  return (
    <div className="about-page">

      {/* ============ HERO ============ */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="about-label d-inline-block">Our Story</span>
              <h1 className="about-title">
                Beauty <span className="italic">Redefined</span>
                <br />
                Since 2015
              </h1>
              <p className="about-desc">
                ANSHIÉ's GLAM was born from a simple belief — that every woman
                deserves access to luxury beauty products that are safe, ethical,
                and truly effective. What started as a small dream has grown into
                a trusted name in premium cosmetics.
              </p>
              <div className="about-actions d-flex flex-wrap gap-3">
                <Link to="/shop" className="about-btn-primary">
                  Shop Now <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/contact" className="about-btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-hero-images">
                <div className="about-img-1">
                  <img
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=700&fit=crop&q=85"
                    alt="About ANSHIÉ"
                    loading="lazy"
                  />
                </div>
                <div className="about-img-2">
                  <img
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=500&fit=crop&q=85"
                    alt="About ANSHIÉ 2"
                    loading="lazy"
                  />
                </div>
                <div className="about-badge">
                  <span className="about-badge-number">10+</span>
                  <span className="about-badge-text">Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-inner">
            <div className="row g-4">
              {stats.map((stat, i) => (
                <div className="col-6 col-lg-3" key={i}>
                  <div className="about-stat">
                    <span className="about-stat-number">{stat.number}</span>
                    <span className="about-stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="about-mission-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-mission-image">
                <img
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=700&h=600&fit=crop&q=85"
                  alt="Our Mission"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="about-label d-inline-block">Our Mission</span>
              <h2 className="about-section-title">
                Crafted With <span className="italic">Love</span>,
                Made For You
              </h2>
              <p className="about-section-desc">
                We believe beauty is more than just makeup — it's a celebration
                of your unique self. Every product is crafted with premium
                ingredients, tested with care, and designed to make you feel
                confident and radiant.
              </p>
              <p className="about-section-desc">
                From our humble beginnings to becoming a trusted name in premium
                beauty, our journey has been fueled by one simple mission: to
                redefine beauty for the modern woman.
              </p>

              <div className="row g-3 mt-4">
                {['Cruelty-Free Products', 'Premium Ingredients', 'Dermatologist Tested', 'Eco-Friendly Packaging'].map((f, i) => (
                  <div className="col-6" key={i}>
                    <div className="about-feature d-flex align-items-center gap-2">
                      <i className="bi bi-check2-circle"></i>
                      <span>{f}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="about-label d-inline-block">Our Journey</span>
            <h2 className="about-section-title">
              Milestones That <span className="italic">Matter</span>
            </h2>
            <p className="about-section-desc mx-auto" style={{ maxWidth: '600px' }}>
              From a small dream to a trusted brand — here's how we grew
            </p>
          </div>

          <div className="about-timeline">
            {timeline.map((item, i) => (
              <div className="about-timeline-item" key={i}>
                <div className="about-timeline-dot">
                  <i className="bi bi-circle-fill"></i>
                </div>
                <div className="about-timeline-content">
                  <span className="about-timeline-year">{item.year}</span>
                  <h4 className="about-timeline-title">{item.title}</h4>
                  <p className="about-timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="about-values-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="about-label d-inline-block">What We Stand For</span>
            <h2 className="about-section-title">
              Our Core <span className="italic">Values</span>
            </h2>
            <p className="about-section-desc mx-auto" style={{ maxWidth: '600px' }}>
              The principles that guide everything we create
            </p>
          </div>

          <div className="row g-3 g-md-4">
            {values.map((v, i) => (
              <div className="col-6 col-lg-3" key={i}>
                <div className="about-value-card">
                  <span className="about-value-icon">
                    <i className={`bi ${v.icon}`}></i>
                  </span>
                  <h4 className="about-value-title">{v.title}</h4>
                  <p className="about-value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEADERSHIP ============ */}
      <section className="about-leadership-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="about-label d-inline-block">Leadership</span>
            <h2 className="about-section-title">
              Meet Our <span className="italic">Visionaries</span>
            </h2>
            <p className="about-section-desc mx-auto" style={{ maxWidth: '600px' }}>
              The minds shaping the future of premium beauty
            </p>
          </div>

          <div className="row g-4">
            {leadership.map((person, i) => (
              <div className="col-6 col-lg-3" key={i}>
                <div className="about-leader-card">
                  <div className="about-leader-image">
                    <img src={person.image} alt={person.name} loading="lazy" />
                    <div className="about-leader-overlay">
                      <p className="about-leader-quote">"{person.quote}"</p>
                    </div>
                  </div>
                  <div className="about-leader-info">
                    <h4>{person.name}</h4>
                    <span>{person.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AWARDS ============ */}
      <section className="about-awards-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="about-label d-inline-block">Recognition</span>
            <h2 className="about-section-title">
              Awards & <span className="italic">Achievements</span>
            </h2>
          </div>

          <div className="row g-3 g-md-4">
            {awards.map((a, i) => (
              <div className="col-6 col-lg-3" key={i}>
                <div className="about-award-card">
                  <span className="about-award-icon">
                    <i className={`bi ${a.icon}`}></i>
                  </span>
                  <span className="about-award-year">{a.year}</span>
                  <h4 className="about-award-title">{a.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section className="about-team-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="about-label d-inline-block">The Team</span>
            <h2 className="about-section-title">
              The Faces Behind <span className="italic">The Brand</span>
            </h2>
            <p className="about-section-desc mx-auto" style={{ maxWidth: '600px' }}>
              Passionate people dedicated to redefining beauty
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {team.map((member, i) => (
              <div className="col-6 col-md-4" key={i}>
                <div className="about-team-card">
                  <div className="about-team-image">
                    <img src={member.image} alt={member.name} loading="lazy" />
                  </div>
                  <div className="about-team-info">
                    <h4>{member.name}</h4>
                    <span>{member.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-inner">
            <h2 className="about-cta-title">
              Ready To <span className="italic">Glow</span> With Us?
            </h2>
            <p className="about-cta-desc">
              Discover premium beauty crafted just for you.
            </p>
            <Link to="/shop" className="about-cta-btn">
              Explore Collection <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About