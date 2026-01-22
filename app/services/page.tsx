"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import { Carousel3D } from "@/components/ui/carousel-3d"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: "Business Loans",
    button: "Learn More",
    src: "/assets/business-loans.png",
    description: "Comprehensive financing for MSME, SME, companies, shops, retail stores, and commercial enterprises",
    href: "/services/business-loans",
    loanAmount: "₹10L - ₹500Cr",
    interestRate: "9.5% - 14% p.a.",
    tenure: "Up to 15 years",
    features: ["Working Capital", "Business Expansion", "Equipment Purchase", "Inventory Funding"]
  },
  {
    title: "Project Loans",
    button: "Learn More",
    src: "/assets/project-loans.png",
    description: "Site purchase, flat purchase, construction, resort development, and business infrastructure financing",
    href: "/services/project-loans",
    loanAmount: "₹25L - ₹1000Cr",
    interestRate: "10% - 15% p.a.",
    tenure: "Up to 20 years",
    features: ["Site Purchase", "Construction Finance", "Resort Development", "Commercial Projects"]
  },
  {
    title: "Housing Loans",
    button: "Learn More",
    src: "/assets/housing-loans.png",
    description: "Your dream home made affordable with flexible financing and competitive interest rates",
    href: "/services/housing-loans",
    loanAmount: "₹5L - ₹10Cr",
    interestRate: "8.5% - 12% p.a.",
    tenure: "Up to 30 years",
    features: ["Home Purchase", "Home Construction", "Renovation", "Balance Transfer"]
  },
  {
    title: "Education Loans",
    button: "Learn More",
    src: "/assets/education-loans.png",
    description: "Hassle-free education financing for domestic and international academic aspirations",
    href: "/services/education-loans",
    loanAmount: "₹50K - ₹1.5Cr",
    interestRate: "9% - 13.5% p.a.",
    tenure: "Up to 15 years",
    features: ["Domestic Studies", "International Education", "Professional Courses", "Living Expenses"]
  },
  {
    title: "Machinery & Equipment",
    button: "Learn More",
    src: "/assets/machinery-loans.png",
    description: "Industrial machinery, agricultural equipment, commercial vehicles, and inventory financing",
    href: "/services/machinery-loans",
    loanAmount: "₹5L - ₹100Cr",
    interestRate: "10% - 16% p.a.",
    tenure: "Up to 10 years",
    features: ["Industrial Machinery", "Agricultural Equipment", "Commercial Vehicles", "Technology Upgrades"]
  },
]

export default function Services() {
  const heroRef = useRef<HTMLElement>(null)

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="hero-animate inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 px-4 py-2 rounded-full">
              Our Services
            </span>
            <h1 className="hero-animate text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">
              Our Loan Products & Services
            </h1>
            <p className="hero-animate text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete financing solutions tailored to your unique needs. Whether you're growing a business, buying a
              home, pursuing education, or upgrading equipment — we have the perfect loan solution for you.
            </p>
          </div>
        </div>
      </section>

      {/* 3D Carousel Section - Dark */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        {/* Background Image Layer - Same as Service Section */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/service-bg.png')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
              <div className="h-px w-4 sm:w-16 bg-white/30" />
              <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/60" />
              <span className="text-white/80 font-medium text-[9px] md:text-xs tracking-widest uppercase">Explore Our Services</span>
              <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/60" />
              <div className="h-px w-4 sm:w-16 bg-white/30" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Interactive <span className="text-accent italic">Service Showcase</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Click on any service to explore detailed information and find the perfect financing solution
            </p>
          </div>

          {/* 3D Carousel */}
          <div className="py-8 md:py-12">
            <Carousel3D slides={services} showDetails={true} />
          </div>
        </div>
      </section>

      {/* Detailed Service Cards - Bright */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Loan Details & Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive information about our loan products to help you make informed decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-accent/50 hover:shadow-xl transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                {/* Loan Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Loan Amount</span>
                    <span className="text-sm font-semibold text-gray-900">{service.loanAmount}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Interest Rate</span>
                    <span className="text-sm font-semibold text-accent">{service.interestRate}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Tenure</span>
                    <span className="text-sm font-semibold text-gray-900">{service.tenure}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href={service.href}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gray-50 text-gray-900 rounded-xl font-semibold hover:bg-accent hover:text-black transition-all duration-300 group-hover:bg-accent group-hover:text-black"
                >
                  View Details
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Bright */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Our Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive financial solutions backed by expertise and strong banking relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">50+ Bank Partners</h3>
              <p className="text-gray-600 leading-relaxed">
                Strong relationships with leading banks ensure competitive rates and faster approvals
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quick Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamlined documentation and efficient processing for faster loan disbursement
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Personalized Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Tailored loan structures designed to match your specific financial requirements
              </p>
            </motion.div>
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Not Sure Which Loan You Need?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Our experts will analyze your requirements and recommend the best financing solution. Get a free
              consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-xl"
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
