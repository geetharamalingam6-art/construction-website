import { useState } from 'react'
import contactAgentImage from './assets/contact.png'
import './Contact.css'

const contactCards = [
  {
    title: 'Phone Support',
    detail: '+91 84385 58527',
    href: 'tel:+918438558527',
    altDetail: '+91 84381 64827',
    altHref: 'tel:+918381648527',
    icon: <path d="M8.5 3.5 6.7 4.3c-.9.4-1.3 1.5-1 2.4 1.5 4.7 5.1 8.3 9.8 9.8.9.3 2-.1 2.4-1l.8-1.8-3.1-1.8-1 1.2a11.7 11.7 0 0 1-3.7-3.7l1.2-1-1.8-3.1Z" />,
  },
  {
    title: 'Email Address',
    detail: 'vetritechnologysolutions@gmail.com',
    href: 'mailto:vetritechnologysolutions@gmail.com',
    icon: <><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4 7 8 5.8L20 7" /></>,
  },
  {
    title: 'Office Address',
    detail: 'Surandai Bus Stand Backside Surandai, Tenkasi - 627859',
    href: 'https://maps.google.com',
    icon: <><path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></>,
  },
  {
    title: 'Working Hours',
    detail: 'Monday - Saturday 9:00 AM - 6:00 PM',
    href: null,
    icon: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></>,
  },
]

const faqItems = [
  {
    question: 'What IT services do you specialize in?',
    answer: 'We provide web and mobile app development, custom software, cloud and DevOps solutions, UI/UX design, digital marketing, IT training, and business technology consultation.',
  },
  {
    question: 'How long does a typical system integration take?',
    answer: 'Depending on the scope and complexity of your existing infrastructure, a standard integration project takes between 4 to 8 weeks from the initial technical consultation to final launch. We ensure to keep your team fully updated at every key milestone.',
  },
  {
    question: 'Do you offer ongoing 24/7 technical support?',
    answer: 'Yes. We provide reliable ongoing support and maintenance plans to keep your systems secure, updated, and performing at their best.',
  },
]
function Contact() {
  const [openFaq, setOpenFaq] = useState(1)

  return (
    <main className="contact-page" id="contact">
      <section className="contact-hero">
        <div className="contact-copy">
          <h1>Let's Build Your<br /><span>Future Together</span></h1>
          <p>Contact Vetri IT Systems Pvt Ltd for IT solutions, web development, internships, online courses, placements, and business consultation.</p>
          <div className="contact-actions">
            <a className="contact-primary-action" href="tel:+918438558527">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 3.5 6.7 4.3c-.9.4-1.3 1.5-1 2.4 1.5 4.7 5.1 8.3 9.8 9.8.9.3 2-.1 2.4-1l.8-1.8-3.1-1.8-1 1.2a11.7 11.7 0 0 1-3.7-3.7l1.2-1-1.8-3.1Z" /></svg>
              Call Now
            </a>
            <a className="contact-secondary-action" href="mailto:vetritechnologysolutions@gmail.com">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4 7 8 5.8L20 7" /></svg>
              Send Enquiry
            </a>
          </div>
        </div>

        <div className="contact-art-frame">
          <img src={contactAgentImage} alt="Vetri IT Solutions team ready to assist" />
        </div>
      </section>

      <section className="contact-cards" aria-label="Contact details">
        {contactCards.map(({ title, detail, href, icon }) => {
          const content = <>
            <span className="contact-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24">{icon}</svg></span>
            <h2>{title}</h2>
            <p>{detail}</p>
          </>
          return href ? <a className="contact-card" href={href} key={title}>{content}</a> : <article className="contact-card" key={title}>{content}</article>
        })}
      </section>

      <section className="contact-message-section" aria-labelledby="send-message-title">
        <div className="contact-message-intro">
          <h2 id="send-message-title">Send us a message</h2>
          <p>Fill out the form below and our team will get back to you within 24 hours.</p>
        </div>

        <form className="contact-message-form" onSubmit={(event) => event.preventDefault()}>
          <div className="contact-name-fields">
            <label>
              First Name
              <input name="firstName" type="text" placeholder="e.g. Jane" autoComplete="given-name" />
            </label>
            <label>
              Last Name
              <input name="lastName" type="text" placeholder="e.g. Doe" autoComplete="family-name" />
            </label>
          </div>
          <label>
            Email Address
            <input name="email" type="email" placeholder="jane@example.com" autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="How can we help you?" rows="5" />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="why-contact-section" aria-labelledby="why-contact-title">
        <div className="why-contact-heading">
          <h2 id="why-contact-title">Why Contact Vetri?</h2>
          <p>Whether you are growing a business or beginning a technology career, our team is ready to give you clear, practical support.</p>
        </div>

        <div className="why-contact-grid">
          <article className="why-contact-card">
            <span className="why-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3.5 14.3 8l4.9.7-3.5 3.4.8 4.8-4.5-2.3-4.5 2.3.8-4.8-3.5-3.4 4.9-.7L12 3.5Z" /></svg></span>
            <h3>100% Free Consultation</h3>
            <p>Share your requirements and get an honest, no-obligation first consultation from our experts.</p>
          </article>
          <article className="why-contact-card">
            <span className="why-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 4.5h14v10H9l-4 4v-14Z" /><path d="M8.5 9.5h7M8.5 13h4.5" /></svg></span>
            <h3>Quick Project Discussion</h3>
            <p>Get a focused discussion about your goals, timeline, technology options, and next steps.</p>
          </article>
          <article className="why-contact-card">
            <span className="why-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5.5 12 2l8 3.5-8 3-8-3Z" /><path d="M7 7.5V13c0 1.7 2.2 3 5 3s5-1.3 5-3V7.5M20 6v6" /></svg></span>
            <h3>Career Guidance &amp; Internship Support</h3>
            <p>Explore learning, internship, and placement guidance designed to help you build confidence.</p>
          </article>
          <article className="why-contact-card">
            <span className="why-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><path d="M4 13h3v5H5a1 1 0 0 1-1-1v-4ZM20 13h-3v5h2a1 1 0 0 0 1-1v-4Z" /><path d="M17 18c0 1.5-1.2 2.5-3 2.5h-1.5" /></svg></span>
            <h3>Dedicated Customer Support</h3>
            <p>Receive responsive support from a team that stays available throughout your journey.</p>
          </article>
        </div>
      </section>

      <section className="faq-section" aria-labelledby="faq-title">
        <div className="faq-heading">
          <h2 id="faq-title">Frequently Asked Questions</h2>
          <p>Find quick answers to common questions about working with Vetri IT Solutions.</p>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index
            return (
              <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
                <button className="faq-question" type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)}>
                  <span>{item.question}</span>
                  <span className="faq-toggle" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d={isOpen ? 'm7 14 5-5 5 5' : 'm7 10 5 5 5-5'} /></svg>
                  </span>
                </button>
                {isOpen && <div className="faq-answer"><p>{item.answer}</p></div>}
              </article>
            )
          })}
        </div>
      </section>

      <section className="contact-deploy-cta" aria-labelledby="deploy-title">
        <h2 id="deploy-title">Ready to Deploy Powerful Solutions?</h2>
        <p>Partner with Vetri IT Solutions to integrate cutting-edge technology into your business. Let’s discuss your specific needs and architect a solution for your future.</p>
        <div className="deploy-cta-actions">
          <a href="mailto:vetritechnologysolutions@gmail.com">Schedule a Demo</a>
          <a href="tel:+918438558527">Talk to an Expert</a>
        </div>
      </section>
    </main>
  )
}

export default Contact

