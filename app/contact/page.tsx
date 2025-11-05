"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    loanType: "",
    message: "",
    agree: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, type } = e.target
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      })
    } else {
      setFormData({
        ...formData,
        [name]: e.target.value,
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Let's discuss your loan needs and find the perfect financing solution for your business.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <Phone className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-foreground">
                  +91-XXXXXXXXXX
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:info@capitalcore.com" className="text-muted-foreground hover:text-foreground">
                  info@capitalcore.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Office</h3>
                <p className="text-muted-foreground">Yelahanka, Bengaluru</p>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="bg-accent text-accent-foreground p-8 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-2">Thank You!</h3>
              <p>We've received your inquiry. Our team will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name *"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <select
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>
                  Select Loan Type *
                </option>
                <option value="business-loan">Business Loan</option>
                <option value="working-capital">Working Capital</option>
                <option value="restructuring">Loan Restructuring</option>
                <option value="advisory">Corporate Advisory</option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your business and financing needs..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
                <label htmlFor="agree" className="text-sm text-muted-foreground">
                  I agree to be contacted by Capital Core Finance for discussing my loan needs.
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
