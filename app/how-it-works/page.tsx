"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle, Clock, FileText, CreditCard, ArrowRight, Users, TrendingUp, Shield } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    number: "01",
    icon: Clock,
    title: "Initial Consultation",
    description:
      "We begin with an in-depth consultation to understand your business, financing needs, and goals. This helps us determine the best loan options for your situation.",
    details: [
      "Business overview and revenue analysis",
      "Loan amount and purpose discussion",
      "Timeline and urgency assessment",
      "Previous loan experience review",
    ],
  },
  {
    number: "02",
    icon: FileText,
    title: "Document Review & Eligibility",
    description:
      "Our team thoroughly reviews your financial documents and assesses your eligibility across multiple lending institutions to find the best match.",
    details: [
      "Financial statement analysis",
      "Credit score evaluation",
      "Collateral assessment",
      "Multi-bank eligibility check",
    ],
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Bank Match & Application",
    description:
      "We identify the best-matched banks and lenders for your profile, prepare your application professionally, and manage the entire submission process.",
    details: ["Optimal bank identification", "Professional application preparation", "Complete document compilation", "Direct bank coordination"],
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Approval & Disbursement",
    description:
      "Once approved, we coordinate with the bank to ensure smooth and timely disbursement of your loan, and provide comprehensive post-approval support.",
    details: ["Real-time approval tracking", "Disbursement coordination", "Post-approval assistance", "Ongoing relationship management"],
  },
]

const benefits = [
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Experienced consultants guide you through every step of the loan process",
  },
  {
    icon: TrendingUp,
    title: "Higher Approval Rates",
    description: "Our expertise and bank relationships significantly improve your approval chances",
  },
  {
    icon: Shield,
    title: "Transparent Process",
    description: "Complete transparency with no hidden charges or surprise fees",
  },
]

export default function HowItWorks() {
  const heroRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        heroRef.current?.querySelectorAll(".hero-animate"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
      )

      // Steps animation
      gsap.fromTo(
        stepsRef.current?.querySelectorAll(".step-item"),
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <main>
      {/* Hero Section - Bright */}
      <section ref={heroRef} className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="hero-animate inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 px-4 py-2 rounded-full">
              Our Process
            </span>
            <h1 className="hero-animate text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">
              How It Works
            </h1>
            <p className="hero-animate text-xl text-gray-600 leading-relaxed">
              Our proven 4-step process ensures a smooth journey from consultation to loan approval and disbursement.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section - Bright */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={stepsRef} className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  className="step-item flex flex-col md:flex-row gap-6 md:gap-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-black text-2xl font-bold shadow-xl shadow-accent/20">
                        {step.number}
                      </div>
                      {/* Connecting line */}
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-accent/50 to-transparent mt-4" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 p-6 md:p-8 rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent/10 rounded-xl">
                        <Icon className="text-accent" size={24} />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900">{step.title}</h2>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - Dark */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/service-bg.png')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Our Process?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Experience the difference of working with dedicated financial consultants
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Stats - Bright */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Average Processing Timeline</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial consultation to loan disbursement - here's what you can expect
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-accent mb-2">1-2</div>
              <div className="text-sm text-gray-600 mb-1">Days</div>
              <div className="text-xs text-gray-500">Initial Consultation</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-accent mb-2">3-5</div>
              <div className="text-sm text-gray-600 mb-1">Days</div>
              <div className="text-xs text-gray-500">Document Review</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-accent mb-2">7-10</div>
              <div className="text-sm text-gray-600 mb-1">Days</div>
              <div className="text-xs text-gray-500">Bank Processing</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-accent mb-2">2-3</div>
              <div className="text-sm text-gray-600 mb-1">Days</div>
              <div className="text-xs text-gray-500">Disbursement</div>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic">
              * Timeline may vary based on loan type, documentation completeness, and bank processing times
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/service-bg.png')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h3>
            <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">
              Schedule your free consultation with our experts today and take the first step towards funding your
              dreams.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 shadow-xl"
            >
              Book Free Consultation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
