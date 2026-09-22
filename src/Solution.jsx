import './Solution.css'
import websiteImg from './assets/website.png'
import ecommerceImg from './assets/HM.png'
import process1Img from './assets/pet.jpg'
import process2Img from './assets/yoga.jpg'
import process3Img from './assets/car.png'
import process4Img from './assets/healthcare.png'

function Solution() {
  return (
    <section className="solution-page-section" id="solution">
      <div className="solution-intro">
        <h2>
          Enterprise-Grade
          <br />
          <span>Solutions</span>
        </h2>
        <p>
          Pre-built and custom software platforms designed to streamline
          operations, enhance customer experiences, and drive digital
          transformation across your organization.
        </p>
      </div>

      <div className="solution-grid">
        {/* Card 1: School Management */}
        <div className="solution-item">
          <div className="solution-img-wrapper">
            <img src={websiteImg} alt="School Management" />
          </div>
          <div className="solution-content">
            <h3>🎓 School Management</h3>
            <p>Comprehensive ERP solution designed to digitize educational institutions.</p>
            <ul>
              <li><b>✓</b> Student Information System</li>
              <li><b>✓</b> Attendance & Grading</li>
              <li><b>✓</b> Fee Management Portal</li>
            </ul>
          </div>
        </div>

        {/* Card 2: E-commerce Platform */}
        <div className="solution-item">
          <div className="solution-img-wrapper">
            <img src={ecommerceImg} alt="E-commerce Platform" />
          </div>
          <div className="solution-content">
            <h3>🛒 E-commerce Platform</h3>
            <p>Scalable online storefronts optimized for high conversion rates.</p>
            <ul>
              <li><b>✓</b> Inventory Management</li>
              <li><b>✓</b> Payment Gateway Integration</li>
              <li><b>✓</b> Customer Analytics</li>
            </ul>
          </div>
        </div>

        {/* Card 3: Petshop */}
        <div className="solution-item">
          <div className="solution-img-wrapper">
            <img src={process1Img} alt="Petshop Solution" />
          </div>
          <div className="solution-content">
            <h3>🐾 Petshop Solutions</h3>
            <p>All-in-one platform for pet grooming and retail businesses.</p>
            <ul>
              <li><b>✓</b> Appointment Scheduling</li>
              <li><b>✓</b> Retail POS System</li>
              <li><b>✓</b> Loyalty Programs</li>
            </ul>
          </div>
        </div>

        {/* Card 4: Yoga App */}
        <div className="solution-item">
          <div className="solution-img-wrapper">
            <img src={process2Img} alt="Yoga App" />
          </div>
          <div className="solution-content">
            <h3>🧘 Yoga & Fitness App</h3>
            <p>Engaging health and wellness apps for fitness communities.</p>
            <ul>
              <li><b>✓</b> Live Class Streaming</li>
              <li><b>✓</b> Workout Tracking</li>
              <li><b>✓</b> Subscription Management</li>
            </ul>
          </div>
        </div>

        {/* Card 5: Car Resale */}
        <div className="solution-item">
          <div className="solution-img-wrapper">
            <img src={process3Img} alt="Car Resale" />
          </div>
          <div className="solution-content">
            <h3>🚗 Car Resale Portal</h3>
            <p>Marketplace platform connecting buyers and sellers securely.</p>
            <ul>
              <li><b>✓</b> Advanced Vehicle Search</li>
              <li><b>✓</b> Dealer Dashboards</li>
              <li><b>✓</b> Verification Integration</li>
            </ul>
          </div>
        </div>

        {/* Card 6: Supply Chain Solutions */}
        <div className="solution-item">
          <div className="solution-img-wrapper">
            <img src={process4Img} alt="Supply Chain Solutions" />
          </div>
          <div className="solution-content">
            <h3>📦 Supply Chain Solutions</h3>
            <p>End-to-end logistics visibility and operational efficiency.</p>
            <ul>
              <li><b>✓</b> Real-time Tracking</li>
              <li><b>✓</b> Warehouse Management</li>
              <li><b>✓</b> Supplier Portals</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="solution-cta-section">
        <div className="cta-content">
          <h2>Ready to Deploy Powerful Solutions?</h2>
          <p>Schedule a demo today and discover how our custom software can transform your operations.</p>
          <div className="cta-actions">
            <a href="#contact" className="primary-button">Schedule a Demo</a>
            <a href="#contact" className="secondary-button">Talk to an Expert</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
