import './ContactSection.css'

const contactImage = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85'

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <h2>Get in Touch</h2>

        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="John Doe" />

        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" placeholder="john@example.com" />

        <label htmlFor="phone">Phone Number</label>
        <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />

        <label htmlFor="service">Service Required</label>
        <input id="service" name="service" type="text" placeholder="Software Development" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell us about your project..." rows="4"></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-information">
        <h2>Contact Information</h2>
        <div className="contact-details">
          <p><b>⌖</b><span><strong>Office Address</strong>123 Innovation Boulevard, Tech District, NY 10001</span></p>
          <p><b>♧</b><span><strong>Phone Number</strong>+1 (800) 123-4567</span></p>
          <p><b>✉</b><span><strong>Email Address</strong>hello@vetri-it.com</span></p>
          <p><b>◷</b><span><strong>Business Hours</strong>Mon - Fri: 9:00 AM - 6:00 PM</span></p>
        </div>
        <img className="contact-image" src={contactImage} alt="Digital technology network illustration" />
      </div>
    </section>
  )
}

export default ContactSection
