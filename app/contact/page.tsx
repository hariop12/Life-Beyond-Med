"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    consultationType: "in-person",
    message: "",
    firstVisit: false,
    terms: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            service: "",
            date: "",
            time: "",
            consultationType: "in-person",
            message: "",
            firstVisit: false,
            terms: false,
          })
        }, 5000)
      } else {
        alert("Failed to submit booking. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <>
      <Navigation currentPage="contact" />

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>Book Your Consultation</h1>
          <p>Begin your journey to holistic wellness today</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Schedule an Appointment</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours to confirm your consultation.</p>

              {!showSuccess ? (
                <form onSubmit={handleSubmit} className="consultation-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Select Service *</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                      <option value="">Choose a service...</option>
                      <option value="naturopath">Naturopathy</option>
                      <option value="yoga">Yoga Therapy</option>
                      <option value="nutritionist">Holistic Nutrition</option>
                      <option value="sujok">Sujok Smile Healing</option>
                      <option value="meditation">Smile Meditation</option>
                      <option value="holistic">Holistic Healing</option>
                      <option value="counselor">CPA Counseling</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Preferred Date *</label>
                      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="time">Preferred Time *</label>
                      <select id="time" name="time" value={formData.time} onChange={handleChange} required>
                        <option value="">Select time...</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Consultation Type *</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="consultationType"
                          value="in-person"
                          checked={formData.consultationType === "in-person"}
                          onChange={handleChange}
                        />
                        <span>In-Person</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="consultationType"
                          value="online"
                          checked={formData.consultationType === "online"}
                          onChange={handleChange}
                        />
                        <span>Online (Video Call)</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Tell us about your health concerns *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please describe your current health challenges and what you hope to achieve through our services..."
                    ></textarea>
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" name="firstVisit" checked={formData.firstVisit} onChange={handleChange} />
                      <span>This is my first visit</span>
                    </label>
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
                      <span>I agree to the terms and conditions and privacy policy *</span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Book Consultation"}
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <h3>Booking Submitted Successfully!</h3>
                  <p>
                    Thank you for choosing Life Beyond Medicine. We'll contact you within 24 hours to confirm your
                    appointment.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Visit Us</h4>
                    <p>
                      123 Wellness Avenue
                      <br />
                      Holistic Health Center
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Call Us</h4>
                    <p>
                      +1 (555) 123-4567
                      <br />
                      Mon-Fri: 9AM - 6PM
                      <br />
                      Sat: 10AM - 4PM
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email Us</h4>
                    <p>
                      info@lifebeyondmedicine.com
                      <br />
                      support@lifebeyondmedicine.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Why Choose Us?</h3>
                <ul className="benefits-list">
                  <li>
                    <i className="fas fa-check"></i> Certified and experienced practitioners
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Personalized treatment plans
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Holistic approach to wellness
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Natural, safe therapies
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Comfortable, healing environment
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Flexible appointment scheduling
                  </li>
                </ul>
              </div>

              <div className="info-card">
                <h3>What to Expect</h3>
                <div className="expectation-item">
                  <div className="step-number">1</div>
                  <div>
                    <h4>Initial Consultation</h4>
                    <p>Comprehensive health assessment and discussion of your concerns</p>
                  </div>
                </div>
                <div className="expectation-item">
                  <div className="step-number">2</div>
                  <div>
                    <h4>Personalized Plan</h4>
                    <p>Custom treatment protocol designed for your unique needs</p>
                  </div>
                </div>
                <div className="expectation-item">
                  <div className="step-number">3</div>
                  <div>
                    <h4>Ongoing Support</h4>
                    <p>Regular follow-ups and adjustments to ensure optimal results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long is a typical consultation?</h3>
              <p>Initial consultations usually last 60-90 minutes. Follow-up sessions are typically 45-60 minutes.</p>
            </div>
            <div className="faq-item">
              <h3>Do you accept insurance?</h3>
              <p>
                We provide receipts for insurance reimbursement. Please check with your provider about coverage for
                holistic therapies.
              </p>
            </div>
            <div className="faq-item">
              <h3>What should I bring to my first visit?</h3>
              <p>
                Please bring any relevant medical records, a list of current medications, and any questions you may
                have.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I book for someone else?</h3>
              <p>Yes, you can book on behalf of a family member. Please provide their information in the form.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
