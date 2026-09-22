import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2><span>⬡</span> Vetri IT Solutions</h2>
          <p>Delivering innovative web, mobile, and software solutions for modern businesses worldwide.</p>
          <div className="social-links" aria-label="Social media links">
            <a href="#contact" aria-label="Facebook">f</a>
            <a href="#contact" aria-label="Twitter">♥</a>
            <a href="#contact" aria-label="LinkedIn">in</a>
            <a href="#contact" aria-label="Instagram">◎</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#about">About Us</a>
          <a href="#solutions">Our Process</a>
          <a href="#solutions">Portfolio</a>
          <a href="#contact">Testimonials</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <a href="#services">Website Development</a>
          <a href="#services">Mobile App Development</a>
          <a href="#services">Software Solutions</a>
          <a href="#services">Cloud &amp; DevOps</a>
          <a href="#services">UI/UX Design</a>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Service</a>
          <a href="#contact">Cookie Policy</a>
          <a href="#contact">Security</a>
        </div>
      </div>
      <p className="footer-copyright">© 2026 Vetri IT Solutions. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
