import './App.css'
import { useEffect, useState } from 'react'
import aboutImage from './assets/About us.png'
import logoImage from './assets/logo.png'
import laptopImage from './assets/laptop.png'
import websiteImage from './assets/website.png'
import ecommerceImage from './assets/e-commerce.jpeg'
import healthcareImage from './assets/healthcare.png'
import saraImage from './assets/sara.png'
import marcusImage from './assets/marcus.png'
import elenaImage from './assets/elena.png'
import processOneImage from './assets/process1.png'
import processTwoImage from './assets/process2.png'
import processThreeImage from './assets/process3.png'
import processFourImage from './assets/process4.png'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import Contact from './Contact'
import Footer from './Footer'
import Solution from './Solution'
import Service from './Service'

// Each phrase is always three lines, so the heading keeps the same height
// and the layout never jumps while the text rotates.
const heroPhrases = [
  ['Transforming', 'Businesses Through', 'Smart Digital Solutions'],
  ['Building', 'Scalable Products With', 'Modern Technology'],
  ['Growing', 'Brands Through', 'AI-Powered Innovation'],
]

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [heroIndex, setHeroIndex] = useState(0)
  const [heroPhase, setHeroPhase] = useState('entering')

  const goToPage = (page) => (event) => {
    event.preventDefault()
    setCurrentPage(page)
  }

  // Rotate the hero headline: leave, swap the text, then reveal it again.
  useEffect(() => {
    if (currentPage !== 'home') {
      return undefined
    }

    const leaveTimer = setTimeout(() => setHeroPhase('leaving'), 3200)
    return () => clearTimeout(leaveTimer)
  }, [heroIndex, currentPage])

  useEffect(() => {
    if (heroPhase !== 'leaving') {
      return undefined
    }

    const swapTimer = setTimeout(() => {
      setHeroIndex((index) => (index + 1) % heroPhrases.length)
      setHeroPhase('entering')
    }, 520)

    return () => clearTimeout(swapTimer)
  }, [heroPhase])

  const heroLines = heroPhrases[heroIndex]

  const renderHomePage = () => (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={goToPage('home')} aria-label="Vetri IT Solutions home">
          <img src={logoImage} alt="Vetri Technology Service" />
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a className="active" href="#home" onClick={goToPage('home')}>Home</a>
          <a href="#about" onClick={goToPage('about')}>About</a>
          <a href="#solution" onClick={goToPage('solution')}>Solution</a>
          <a href="#services" onClick={goToPage('services')}>Service</a>
          <a href="#contact" onClick={goToPage('contact')}>Contact</a>
        </nav>

        <a className="header-cta" href="#contact" onClick={goToPage('contact')}>Get Consultation</a>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <h1 className="hero-rotator">
            <span className={`hero-phrase is-${heroPhase}`} aria-live="polite">
              {heroLines.map((line, index) => (
                <span
                  key={`${heroIndex}-${index}`}
                  className={`hero-phrase-line hero-phrase-line-${index + 1}`}
                >
                  {line}
                </span>
              ))}
            </span>
          </h1>
          <p className="hero-description">
            Vetri IT Solutions delivers innovative web, mobile,<br className="desktop-break" />
            software, cloud, and AI-powered solutions for modern<br className="desktop-break" />
            businesses.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">Get Free Consultation</a>
            <a className="secondary-button" href="#services" onClick={goToPage('services')}>View Services</a>
          </div>
        </div>

        <div className="hero-art">
          <img src={laptopImage} alt="Vetri laptop and mobile system" />
        </div>
      </section>

      <section className="metrics-section" aria-label="Vetri achievements">
        <div className="metric-card">
          <strong>250+</strong>
          <span>Projects Completed</span>
        </div>
        <div className="metric-card">
          <strong>120+</strong>
          <span>Happy Clients</span>
        </div>
        <div className="metric-card">
          <strong>10+</strong>
          <span>Years Experience</span>
        </div>
        <div className="metric-card">
          <strong>24/7</strong>
          <span>Technical Support</span>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-heading">
          <h2>Our Premium Services</h2>
          <p>
            Comprehensive digital solutions tailored to elevate your business<br className="desktop-break" />
            operations and user experiences.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <span className="service-icon" aria-hidden="true"><svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></svg></span>
            <h3>Website Development</h3>
            <p>Modern, responsive websites built to grow your business.</p>
          </article>
          <article className="service-card">
            <span className="service-icon" aria-hidden="true"><svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></svg></span>
            <h3>Mobile App Development</h3>
            <p>Powerful mobile experiences for Android and iOS users.</p>
          </article>
          <article className="service-card">
            <span className="service-icon" aria-hidden="true"><svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M8 9h8M8 13h5M8 17h3" /></svg></span>
            <h3>Software Solutions</h3>
            <p>Reliable software designed around your unique workflow.</p>
          </article>
          <article className="service-card">
            <span className="service-icon" aria-hidden="true"><svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18h10a4 4 0 0 0 .5-8A5.5 5.5 0 0 0 7 11a3.5 3.5 0 0 0 0 7Z" /><path d="M12 10v6M9.5 13.5 12 10l2.5 3.5" /></svg></span>
            <h3>Cloud &amp; DevOps</h3>
            <p>Secure cloud systems with smooth, scalable delivery.</p>
          </article>
          <article className="service-card">
            <span className="service-icon" aria-hidden="true"><svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m5 19 3.5-.8L18 8.7a2.1 2.1 0 0 0-3-3L5.5 15.2 5 19Z" /><path d="m13.5 7.2 3.3 3.3" /></svg></span>
            <h3>UI/UX Design</h3>
            <p>Clear and engaging interfaces users enjoy navigating.</p>
          </article>
          <article className="service-card">
            <span className="service-icon" aria-hidden="true"><svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="5" /><path d="m14 14 5 5M7.5 10h5M10 7.5v5" /></svg></span>
            <h3>Digital Marketing &amp; SEO</h3>
            <p>Digital strategies that increase reach and conversions.</p>
          </article>
        </div>
      </section>

      <section className="partner-section">
        <div className="partner-image-wrap">
          <img src={aboutImage} alt="Vetri technology team working in a modern office" />
        </div>

        <div className="partner-content">
          <h2>Your Trusted Technology<br />Partner</h2>
          <p>
            At Vetri IT Solutions, we bring together strategy, design, and engineering
            to help businesses modernize operations and deliver better digital experiences.
          </p>
          <p>
            From startups to growing enterprises, we create scalable, secure, and
            business-focused solutions that solve real challenges and support long-term growth.
          </p>

          <div className="partner-benefits">
            <span><b aria-hidden="true">&#10003;</b> Experienced Team</span>
            <span><b aria-hidden="true">&#10003;</b> Custom Solutions</span>
            <span><b aria-hidden="true">&#10003;</b> On-Time Delivery</span>
            <span><b aria-hidden="true">&#10003;</b> Affordable Pricing</span>
          </div>
        </div>
      </section>

      <section className="solutions-section" id="solutions">
        <div className="compact-section-heading">
          <h2>Featured Solutions</h2>
          <p>We combine strategy, product thinking, and engineering to build digital experiences that move business goals forward.</p>
        </div>

        <div className="solutions-grid">
          <article className="solution-card">
            <span className="solution-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5.5" rx="7" ry="2.5" /><path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" /></svg></span>
            <h3>EPR Management System</h3>
            <p>Brand alignment, product roadmap planning, and digital direction designed to unlock sustainable growth.</p>
            <a href="#contact">Learn More <span aria-hidden="true">&#8594;</span></a>
          </article>

          <article className="solution-card">
            <span className="solution-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h2l2 10h9l2-7H7" /><circle cx="10" cy="19" r="1" /><circle cx="17" cy="19" r="1" /></svg></span>
            <h3>E-Commerce Platform</h3>
            <p>Custom platforms and scalable systems built for speed, stability, and long-term business value.</p>
            <a href="#contact">Learn More <span aria-hidden="true">&#8594;</span></a>
          </article>

          <article className="solution-card">
            <span className="solution-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 8h5M18.5 5.5v5" /></svg></span>
            <h3>CRM & Automation</h3>
            <p>Data-informed marketing and optimization strategies that help businesses convert attention into action.</p>
            <a href="#contact">Learn More <span aria-hidden="true">&#8594;</span></a>
          </article>
        </div>
      </section>

      <section className="process-section">
        <div className="compact-section-heading">
          <h2>Our Proven Process</h2>
          <p>A Systematic approach to delivery high-quality digital products on time.</p>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <div className="process-art process-art-one"><img src={processOneImage} alt="Discover process" /></div>
          </div>
          <div className="process-card">
            <div className="process-art process-art-two"><img src={processTwoImage} alt="Design process" /></div>
          </div>
          <div className="process-card">
            <div className="process-art process-art-three"><img src={processThreeImage} alt="Develop process" /></div>
          </div>
          <div className="process-card">
            <div className="process-art process-art-four"><img src={processFourImage} alt="Deploy process" /></div>
          </div>
        </div>
      </section>

      <section className="case-studies-section">
        <div className="compact-section-heading">
          <h2>Featured Case Studies</h2>
          <p>Explore how we have helped business achieve their goals through technology.</p>
        </div>

        <div className="case-studies-grid">
          <article className="case-study-card">
            <img src={websiteImage} alt="Student dashboard website" />
            <span>WEBSITE</span>
            <h3>Student Dashboard</h3>
            <a href="#contact">View Case Study</a>
          </article>

          <article className="case-study-card">
            <img src={ecommerceImage} alt="Global e-commerce app" />
            <span>Retail</span>
            <h3>Global E-Commerce App</h3>
            <a href="#contact">View Case Study</a>
          </article>

          <article className="case-study-card">
            <img src={healthcareImage} alt="Healthcare patient management system" />
            <span>Healthcare</span>
            <h3>Patient Management CRM</h3>
            <a href="#contact">View Case Study</a>
          </article>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="compact-section-heading">
          <h2>What Our Clients Say</h2>
          <p>Our clients trust us to deliver business-critical digital work with strategic insight and hands-on execution.</p>
        </div>

        <div className="testimonials-grid">
          <article className="testimonial-card">
            <p>Vetri IT Solutions helped us rework our customer journey, improve engagement, and launch a much more polished experience. Their team was proactive and strategic from day one.</p>
            <div>
              <img className="avatar" src={saraImage} alt="Sarah Jenkins" />
              <strong>Sarah Jenkins<small>CEO, TechGrowth</small></strong>
            </div>
          </article>

          <article className="testimonial-card">
            <p>Their process was transparent, the communication was excellent, and the final product exceeded our expectations. We saw better conversions within the first month.</p>
            <div>
              <img className="avatar" src={marcusImage} alt="Marcus Reynolds" />
              <strong>Marcus Reynolds<small>Founder, RetailFast</small></strong>
            </div>
          </article>

          <article className="testimonial-card">
            <p>The team brought the right mix of technical skill and product thinking. They helped turn a rough idea into a measurable, scalable digital solution.</p>
            <div>
              <img className="avatar" src={elenaImage} alt="Elena Wong" />
              <strong>Elena Wong<small>Founder, RetailFast</small></strong>
            </div>
          </article>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )

  if (currentPage === 'about') {
    return (
      <main className="site-shell">
        <header className="site-header">
          <a className="brand" href="#home" onClick={goToPage('home')} aria-label="Vetri IT Solutions home">
            <img src={logoImage} alt="Vetri Technology Service" />
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home" onClick={goToPage('home')}>Home</a>
            <a className="active" href="#about" onClick={goToPage('about')}>About</a>
            <a href="#solution" onClick={goToPage('solution')}>Solution</a>
            <a href="#services" onClick={goToPage('services')}>Service</a>
            <a href="#contact" onClick={goToPage('contact')}>Contact</a>
          </nav>

          <a className="header-cta" href="#contact" onClick={goToPage('contact')}>Get Consultation</a>
        </header>

        <AboutSection />
        <Footer />
      </main>
    )
  }

  if (currentPage === 'solution') {
    return (
      <main className="site-shell">
        <header className="site-header">
          <a className="brand" href="#home" onClick={goToPage('home')} aria-label="Vetri IT Solutions home">
            <img src={logoImage} alt="Vetri Technology Service" />
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home" onClick={goToPage('home')}>Home</a>
            <a href="#about" onClick={goToPage('about')}>About</a>
            <a className="active" href="#solution" onClick={goToPage('solution')}>Solution</a>
            <a href="#services" onClick={goToPage('services')}>Service</a>
            <a href="#contact" onClick={goToPage('contact')}>Contact</a>
          </nav>

          <a className="header-cta" href="#contact" onClick={goToPage('contact')}>Get Consultation</a>
        </header>

        <Solution />
        <Footer />
      </main>
    )
  }

  if (currentPage === 'services') {
    return (
      <main className="site-shell">
        <header className="site-header">
          <a className="brand" href="#home" onClick={goToPage('home')} aria-label="Vetri IT Solutions home">
            <img src={logoImage} alt="Vetri Technology Service" />
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home" onClick={goToPage('home')}>Home</a>
            <a href="#about" onClick={goToPage('about')}>About</a>
            <a href="#solution" onClick={goToPage('solution')}>Solution</a>
            <a className="active" href="#services" onClick={goToPage('services')}>Service</a>
            <a href="#contact" onClick={goToPage('contact')}>Contact</a>
          </nav>

          <a className="header-cta" href="#contact" onClick={goToPage('contact')}>Get Consultation</a>
        </header>

        <Service />
        <Footer />
      </main>
    )
  }

  if (currentPage === 'contact') {
    return (
      <main className="site-shell">
        <header className="site-header">
          <a className="brand" href="#home" onClick={goToPage('home')} aria-label="Vetri IT Solutions home">
            <img src={logoImage} alt="Vetri Technology Service" />
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home" onClick={goToPage('home')}>Home</a>
            <a href="#about" onClick={goToPage('about')}>About</a>
            <a href="#solution" onClick={goToPage('solution')}>Solution</a>
            <a href="#services" onClick={goToPage('services')}>Service</a>
            <a className="active" href="#contact" onClick={goToPage('contact')}>Contact</a>
          </nav>
          <a className="header-cta" href="tel:+918438558527">Call Now</a>
        </header>
        <Contact />
        <Footer />
      </main>
    )
  }

  return renderHomePage()
}

export default App






