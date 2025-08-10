import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-description">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <form className="contact-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-input" placeholder="Your name" required />
          </div>
          
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" placeholder="your.email@example.com" required />
          </div>
          
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" placeholder="Tell me about your project..." required></textarea>
          </div>
          
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
