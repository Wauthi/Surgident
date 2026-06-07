import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
    })
      .then(() => {
        alert("Message sent successfully! We'll get back to you soon.");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch(() => {
        alert('Failed to send message. Please try again later.');
      });
    form.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header center fade-in" style={{ marginBottom: '48px' }}>
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            Get In Touch
          </span>
          <h2 className="section-title">Contact Us</h2>
          {/* <p className="section-subtitle">Reach out and our team will respond promptly.</p> */}
        </div>

        <div className="contact-grid">
          <div className="contact-info fade-in">
            <div className="contact-detail">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.01 2.82 2 2 0 012 .66h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className="contact-detail-text">
                <strong>Phone / WhatsApp</strong>
                <span>
                  <a href="tel:+254716583415">+254 716 583 415</a><br />
                  <a href="tel:+254759101225">+254 759 101 225</a>
                </span>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-detail-text">
                <strong>Email</strong>
                <span>
                  <a href="mailto:surgientlimited@gmail.com">surgidentlimited@gmail.com</a><br />
                  <a href="mailto:surgident2019@gmail.com">surgident2019@gmail.com</a>
                </span>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-detail-text">
                <strong>Physical Address</strong>
                <span>Surgident Supplies Ltd<br />Chepkorio road off Lusaka Road Industrial area, Nairobi, Kenya<br />P.O. Box 67081-00200</span>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="contact-detail-text">
                <strong>Business Hours</strong>
                <span>Mon – Fri: 8:00 AM – 5:30 PM<br />Saturday: 9:00 AM – 1:00 PM</span>
              </div>
            </div>

            <a href="https://wa.me/254716583415" className="whatsapp-btn" target="_blank" rel="noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            <div className="map-placeholder">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span>Industrial Area, Nairobi, Kenya</span>
              <a href="https://maps.app.goo.gl/r5y7AkHZTtiuagQq9" target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: 'var(--accent)' }}>Open in Google Maps →</a>
              <div style={{ marginTop: '8px', width: '100%' }}>
                <iframe
                  title="Surgident Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.578660565721!2d36.8253703748035!3d-1.301295698686341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f113f5070af9b%3A0x90bd4c2ea5dcb229!2ssurgident%20Limited!5e0!3m2!1sen!2ske!4v1780858509385!5m2!1sen!2ske"
                  className='map-frame'
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="contact-form fade-in">
            <div className="form-title">Send Us a Message</div>
            <form
              action="https://formspree.io/f/xkoajaqw"
              method="POST"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name= "fname" placeholder="John" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name= "lname" placeholder="Doe" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="john@hospital.co.ke" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="+254 700 000 000" />
              </div>
              <div className="form-group">
                <label>Organisation / Facility</label>
                <input type="text" name="organisation" placeholder="e.g. Nairobi General Hospital" />
              </div>
              <div className="form-group">
                <label>Type of Inquiry</label>
                <select name="inquiryType" defaultValue="">
                  <option value="" disabled>Select inquiry type</option>
                  <option>Product Quotation</option>
                  <option>Order Placement</option>
                  <option>Product Availability</option>
                  <option>Delivery Query</option>
                  <option>Partnership / Distribution</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name= "message" placeholder="Describe your requirements, list products needed, or ask any questions..." />
              </div>
              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={submitted}
                style={submitted ? { background: '#16a34a' } : {}}
              >
                {submitted ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
