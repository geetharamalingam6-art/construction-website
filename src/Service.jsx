import './Service.css'
import websiteImage from './assets/car.png'
import mobileImage from './assets/margin.png'
import softwareImage from './assets/software.jpeg'
import cloudImage from './assets/cloud.png'
import designImage from './assets/ui ux.jpeg'
import marketingImage from './assets/seo.png'

function Service() {
  return (
    <section className="service-page-section" id="services">
      {/* 1. Our Premium Services */}
      <div className="service-intro">
        <h2>Our Premium Services</h2>
        <p>
          Comprehensive digital solutions tailored to elevate your business
          operations and user experiences.
        </p>
      </div>

      <div className="service-grid">
        {/* Card 1 */}
        <div className="service-item">
          <div className="service-image">
            <img src={websiteImage} alt="Website development service" />
          </div>
          <h3>Website Development</h3>
          <p>Modern, responsive websites built to grow your business.</p>
          <ul>
            <li><b>✓</b> Custom Web Apps</li>
            <li><b>✓</b> CMS Development</li>
            <li><b>✓</b> E-commerce Sites</li>
            <li><b>✓</b> Performance Optimization</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="service-item">
          <div className="service-image">
            <img src={mobileImage} alt="Mobile app development service" />
          </div>
          <h3>Mobile App Development</h3>
          <p>Powerful mobile experiences for Android and iOS users.</p>
          <ul>
            <li><b>✓</b> Native iOS & Android</li>
            <li><b>✓</b> Cross-Platform Apps</li>
            <li><b>✓</b> App Store Deployment</li>
            <li><b>✓</b> Maintenance & Support</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="service-item">
          <div className="service-image">
            <img src={softwareImage} alt="Software solutions service" />
          </div>
          <h3>Software Solutions</h3>
          <p>Reliable software designed around your unique workflow.</p>
          <ul>
            <li><b>✓</b> Enterprise Software (ERP)</li>
            <li><b>✓</b> Custom CRM Systems</li>
            <li><b>✓</b> SaaS Development</li>
            <li><b>✓</b> Legacy Modernization</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="service-item">
          <div className="service-image">
            <img src={cloudImage} alt="Cloud and DevOps service" />
          </div>
          <h3>Cloud &amp; DevOps</h3>
          <p>Secure cloud systems with smooth, scalable delivery.</p>
          <ul>
            <li><b>✓</b> Cloud Migration</li>
            <li><b>✓</b> CI/CD Pipelines</li>
            <li><b>✓</b> Serverless Architecture</li>
            <li><b>✓</b> 24/7 Monitoring</li>
          </ul>
        </div>

        {/* Card 5 */}
        <div className="service-item">
          <div className="service-image">
            <img src={designImage} alt="UI and UX design service" />
          </div>
          <h3>UI/UX Design</h3>
          <p>Clear and engaging interfaces users enjoy navigating.</p>
          <ul>
            <li><b>✓</b> User Research</li>
            <li><b>✓</b> Wireframing & Prototyping</li>
            <li><b>✓</b> Visual Design</li>
            <li><b>✓</b> Usability Testing</li>
          </ul>
        </div>

        {/* Card 6 */}
        <div className="service-item">
          <div className="service-image">
            <img src={marketingImage} alt="Digital marketing and SEO service" />
          </div>
          <h3>Digital Marketing &amp; SEO</h3>
          <p>Digital strategies that increase reach and conversions.</p>
          <ul>
            <li><b>✓</b> Search Engine Optimization</li>
            <li><b>✓</b> Pay-Per-Click Ads</li>
            <li><b>✓</b> Social Media Marketing</li>
            <li><b>✓</b> Content Strategy</li>
          </ul>
        </div>
      </div>

      {/* 2. Technologies We Master */}
      <div className="technologies-section">
        <div className="tech-intro">
          <h2>Technologies We Master</h2>
          <p>We use the latest and most robust tech stacks to build future-ready solutions.</p>
        </div>

        {/* Frontend Technologies */}
        <div className="tech-category">
          <h3>Frontend Technologies</h3>
          <div className="tech-grid">
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
                </svg>
              </span>
              <strong>React.js</strong>
            </div>
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
                </svg>
              </span>
              <strong>Vue.js</strong>
            </div>
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3.5" y="5" width="17" height="14" rx="2" />
                  <path d="M3.5 9.5h17M10 9.5V19" />
                </svg>
              </span>
              <strong>Next.js</strong>
            </div>
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h9l4 4v14H6z" />
                  <path d="M15 3v4h4" />
                  <path d="m13.5 12.5-2.5 4h3.5l-1.5 4M12 12.5h2" />
                </svg>
              </span>
              <strong>TypeScript</strong>
            </div>
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 20c2.5-4 6.5-5 9-9 .8-1.3 1.3-2.7 1.5-4.2" />
                  <path d="M13.5 6.8a2.2 2.2 0 1 1 3.1 3.1c-1.5-.2-2.9.3-4.1 1.1" />
                  <path d="M4.5 19.5 6 21" />
                </svg>
              </span>
              <strong>Tailwind CSS</strong>
            </div>
          </div>
        </div>

        {/* Backend & Database */}
        <div className="tech-category">
          <h3>Backend &amp; Database</h3>
          <div className="tech-grid">
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3.5" y="6" width="17" height="4.5" rx="2.2" />
                  <rect x="3.5" y="13.5" width="17" height="4.5" rx="2.2" />
                </svg>
              </span>
              <strong>Node.js</strong>
            </div>
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m7 7 4.5 5L7 17" />
                  <path d="M14 17h4" />
                </svg>
              </span>
              <strong>Python</strong>
            </div>
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="6" rx="7" ry="2.6" />
                  <path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
                  <path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
                </svg>
              </span>
              <strong>PostgreSQL</strong>
            </div>
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="6" rx="7" ry="2.6" />
                  <path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
                  <path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
                </svg>
              </span>
              <strong>MongoDB</strong>
            </div>
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3 7.5 4.5v9L12 21l-7.5-4.5v-9L12 3Z" />
                  <path d="m4.5 7.5 7.5 4.5 7.5-4.5M12 12v9" />
                </svg>
              </span>
              <strong>Redis</strong>
            </div>
          </div>
        </div>

        {/* Cloud & Mobile */}
        <div className="tech-category">
          <h3>Cloud &amp; Mobile</h3>
          <div className="tech-grid">
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 18.5h10a4 4 0 0 0 .5-8A5.5 5.5 0 0 0 7 11a3.5 3.5 0 0 0 0 7Z" />
                </svg>
              </span>
              <strong>AWS</strong>
            </div>
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 18.5h10a4 4 0 0 0 .5-8A5.5 5.5 0 0 0 7 11a3.5 3.5 0 0 0 0 7Z" />
                </svg>
              </span>
              <strong>Azure</strong>
            </div>
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7.5" y="2.5" width="9" height="19" rx="2.5" />
                  <path d="M11 18.5h2" />
                </svg>
              </span>
              <strong>Flutter</strong>
            </div>
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7.5" y="2.5" width="9" height="19" rx="2.5" />
                  <path d="M11 18.5h2" />
                </svg>
              </span>
              <strong>React Native</strong>
            </div>
            <div className="tech-card">
              <span className="tech-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
                  <path d="m3 12 9 4.5 9-4.5" />
                  <path d="m3 16.5 9 4.5 9-4.5" />
                </svg>
              </span>
              <strong>Docker</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CTA Section */}
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

export default Service
