import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Create Gmail compose URL with pre-filled content
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=athamnynoor@gmail.com&su=${encodeURIComponent(`Portfolio Contact from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
      
      // Open Gmail in a new tab
      window.open(gmailUrl, '_blank')
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-description">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Your name" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="your.email@example.com" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea 
              className="form-textarea" 
              placeholder="Tell me about your project..." 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div className="submit-success">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="submit-error">
              There was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
