"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Phone, Mail, Building2 } from "lucide-react"

export default function CTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    loanType: "",
    loanAmount: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-black">
      {/* Background Image Layer - Same as Service Section */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/service-bg.png')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
            <div className="h-px w-4 sm:w-16 bg-white/30" />
            <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/60" />
            <span className="text-white/80 font-medium text-[9px] md:text-xs tracking-widest uppercase">Get Started</span>
            <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/60" />
            <div className="h-px w-4 sm:w-16 bg-white/30" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
            Ready to Get <span className="text-accent italic">Funded?</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Fill out this quick form and our team will contact you within 24 hours.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1c1c2e]/90 backdrop-blur-md border border-accent/50 p-8 md:p-12 rounded-3xl text-center shadow-[0_0_50px_-10px_rgba(212,168,83,0.3)]"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-bold text-2xl mb-4 text-white">Thank You!</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Our team will get back to you within 24 hours with personalized guidance for your loan needs.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#1c1c2e]/90 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/5 text-white border border-white/20 rounded-xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#1c1c2e] text-white">
                      Select Loan Type
                    </option>
                    <option value="business-loan" className="bg-[#1c1c2e] text-white">Business Loan</option>
                    <option value="project-loan" className="bg-[#1c1c2e] text-white">Project Loan</option>
                    <option value="housing-loan" className="bg-[#1c1c2e] text-white">Housing Loan</option>
                    <option value="education-loan" className="bg-[#1c1c2e] text-white">Education Loan</option>
                    <option value="machinery-loan" className="bg-[#1c1c2e] text-white">Machinery Loan</option>
                    <option value="restructuring" className="bg-[#1c1c2e] text-white">Loan Restructuring</option>
                  </select>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 font-semibold">₹</span>
                  <input
                    type="text"
                    name="loanAmount"
                    placeholder="Loan Amount Needed"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className="w-full pl-8 pr-4 py-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-accent text-black font-bold text-lg rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-[0_4px_20px_rgba(212,168,83,0.3)] hover:shadow-[0_6px_25px_rgba(212,168,83,0.4)]"
              >
                Get Pre-Qualified
              </motion.button>

              <p className="text-center text-white/50 text-sm">
                Secure & confidential. We respect your privacy.
              </p>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  )
}