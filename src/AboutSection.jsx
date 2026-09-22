import aboutImage from './assets/partner.png'
import rajeshImage from './assets/marcus.png'
import priyaImage from './assets/elena.png'
import anilImage from './assets/anil.png'
import saraImage from './assets/sara jenkins.png'
import './AboutSection.css'

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-intro">
        <h2>About Vetri IT Solutions</h2>
        <p>
          We are a team of passionate technologists dedicated to driving innovation
          and empowering businesses through cutting-edge digital solutions.
        </p>
      </div>

      <div className="partner-section">
        <div className="partner-image-wrap">
          <img
            src={aboutImage}
            alt="Vetri technology team working in a modern office"
          />
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
            <span><svg className="partner-benefit-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0M14.5 18a4 4 0 0 1 5.5-3.7" /></svg>Experienced Team</span>
            <span><svg className="partner-benefit-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /><circle cx="9" cy="6" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="11" cy="18" r="2" /></svg>Custom Solutions</span>
            <span><svg className="partner-benefit-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></svg>On-Time Delivery</span>
            <span><svg className="partner-benefit-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 5.5h11l5 5-10 10-6-6V5.5Z" /><circle cx="8" cy="9.5" r="1" /><path d="M12 12h4M14 10v4" /></svg>Affordable Pricing</span>
          </div>
        </div>
      </div>

      <div className="metrics-section" aria-label="Vetri achievements">
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
      </div>

      <div className="mission-vision-section">
        <div className="mission-card">
          <div className="mission-vision-heading">
            <span className="mission-vision-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
                <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" />
              </svg>
            </span>
            <h3>Our Mission</h3>
          </div>
          <p>
            To empower businesses globally by delivering innovative, reliable, and scalable digital solutions that drive growth and operational excellence.
          </p>
        </div>
        <div className="vision-card">
          <div className="mission-vision-heading">
            <span className="mission-vision-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="2.6" />
                <path d="M14.6 12h6.9M19.5 9.3l2-2.3M19.5 14.7l2 2.3" />
                <path d="M9.4 9.4 5.7 5.7M5.7 18.3l3.7-3.7" />
                <path d="m5.7 5.7-2.2.6.6-2.2M5.7 18.3l-2.2-.6.6 2.2" />
              </svg>
            </span>
            <h3>Our Vision</h3>
          </div>
          <p>
            To be the world's most trusted technology partner, transforming ideas into impactful digital realities and shaping the future of technology.
          </p>
        </div>
      </div>

      <div className="industries-section">
        <div className="compact-section-heading">
          <h2>Industries We Transform</h2>
          <p>Delivering tailored digital solutions across diverse sectors.</p>
        </div>
        <div className="industries-grid">
          <article className="industry-card">
            <span className="industry-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 12h4l2-5 3.5 10 2.5-6 1.8 3h5.2" />
              </svg>
            </span>
            <h3>Healthcare</h3>
            <p>Secure telemedicine platforms, electronic health records (EHR) integration, and patient management systems built for compliance.</p>
          </article>
          <article className="industry-card">
            <span className="industry-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5H12V3.5Z" />
                <path d="M14.5 3.9A8.5 8.5 0 0 1 20.1 9.5h-5.6V3.9Z" />
              </svg>
            </span>
            <h3>Finance &amp; Banking</h3>
            <p>Advanced FinTech applications, secure payment gateways, blockchain integration, and fraud detection software.</p>
          </article>
          <article className="industry-card">
            <span className="industry-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
                <path d="M3.5 9h17" />
                <path d="m8 14.5 2 2 5-4.5" />
              </svg>
            </span>
            <h3>Retail &amp; E-Commerce</h3>
            <p>Omnichannel retail platforms, dynamic POS systems, and intelligent inventory management solutions for modern brands.</p>
          </article>
          <article className="industry-card">
            <span className="industry-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 18.5V8.2L3.5 10v8.5H8Z" />
                <path d="M8 18.5h8V6.2L11.5 4v14.5" />
                <path d="M16 18.5h4.5V11l-4.5-3v10.5Z" />
                <path d="m4 5.5 2.5 1.5L9 5.5l2.5 1.5L14 5.5l1.5 1" />
              </svg>
            </span>
            <h3>Manufacturing</h3>
            <p>Industry 4.0 IoT solutions, production line automation, and predictive maintenance dashboards for smart factories.</p>
          </article>
          <article className="industry-card">
            <span className="industry-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9 12 4l9 5-9 5-9-5Z" />
                <path d="M6.5 11.5V16c0 1.5 2.5 2.5 5.5 2.5s5.5-1 5.5-2.5v-4.5" />
                <path d="M21 9.5V15" />
              </svg>
            </span>
            <h3>Education</h3>
            <p>Interactive E-learning platforms, comprehensive campus management systems, and virtual classroom solutions.</p>
          </article>
          <article className="industry-card">
            <span className="industry-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 7h10v9h-10z" />
                <path d="M12.5 10h4l3 3v3h-7z" />
                <circle cx="6.5" cy="18" r="1.6" />
                <circle cx="16.5" cy="18" r="1.6" />
              </svg>
            </span>
            <h3>Logistics &amp; Supply</h3>
            <p>Real-time fleet tracking, dynamic route optimization, and automated warehouse management software.</p>
          </article>
        </div>
      </div>

      <div className="leadership-section">
        <div className="compact-section-heading">
          <h2>Meet Our Leadership</h2>
          <p>The visionaries behind Vetri IT Solutions driving innovation and excellence.</p>
        </div>
        <div className="leadership-grid">
          <div className="leader-card">
            <div className="leader-image">
              <img src={rajeshImage} alt="Rajesh Vetri" />
            </div>
            <h3>Rajesh Vetri</h3>
            <span>Founder & CEO</span>
          </div>
          <div className="leader-card">
            <div className="leader-image">
              <img src={priyaImage} alt="Priya Sharma" />
            </div>
            <h3>Priya Sharma</h3>
            <span>Chief Technology Officer</span>
          </div>
          <div className="leader-card">
            <div className="leader-image">
              <img src={anilImage} alt="Anil Kumar" />
            </div>
            <h3>Anil Kumar</h3>
            <span>Head of Operations</span>
          </div>
          <div className="leader-card">
            <div className="leader-image">
              <img src={saraImage} alt="Sara Jenkins" />
            </div>
            <h3>Sara Jenkins</h3>
            <span>Lead Designer</span>
          </div>
        </div>
      </div>

      <div className="service-cta-section">
        <div className="cta-content">
          <h2>Ready to transform your business?</h2>
          <p>Let's collaborate to build scalable, secure, and innovative digital solutions tailored to your unique needs.</p>
          <div className="cta-actions">
            <a href="#contact" className="primary-button">Get Free Consultation</a>
            <a href="#contact" className="secondary-button">Contact Our Experts</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

