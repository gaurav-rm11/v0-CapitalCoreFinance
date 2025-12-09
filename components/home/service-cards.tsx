"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Building2, Landmark, Home, GraduationCap, Truck, Sparkles } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    icon: Building2,
    title: "Business Loans",
    description:
      "Comprehensive financing solutions for MSME, SME, companies, shops, retail stores, and commercial enterprises",
    href: "/services/business-loans",
    highlights: ["MSME & SME", "Companies & Corporates", "Shops & Retail", "Working Capital"],
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    icon: Landmark,
    title: "Project Loans",
    description:
      "Site purchase, flat purchase, construction, resort development, and business infrastructure financing",
    href: "/services/project-loans",
    highlights: ["Site Purchase", "Flat Purchase", "Construction", "Resort & Commercial"],
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: Home,
    title: "Housing Loans",
    description: "Your dream home made affordable with flexible financing and competitive interest rates",
    href: "/services/housing-loans",
    highlights: ["Home Purchase", "Renovation", "Balance Transfer"],
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    description: "Hassle-free education financing for domestic and international academic aspirations",
    href: "/services/education-loans",
    highlights: ["Domestic", "International", "Professional Courses"],
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Truck,
    title: "Machinery & Equipment",
    description: "Industrial machinery, agricultural equipment, commercial vehicles, and inventory financing",
    href: "/services/machinery-loans",
    highlights: ["Industrial", "Equipment", "Inventory"],
    gradient: "from-rose-500/10 to-red-500/10",
  },
]

export default function ServiceCards() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 section-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/5 px-5 py-2.5 rounded-full border border-primary/10">
            <Sparkles className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            Our Core <span className="gradient-text">Loan Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive financing solutions across multiple categories — tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={service.href} href={service.href} className="service-card group">
                <div className="premium-card p-8 rounded-3xl h-full relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative">
                    <div className="mb-6 inline-flex p-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                      <Icon className="text-primary" size={28} />
                    </div>

                    <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs px-3 py-1.5 bg-secondary/80 rounded-full text-muted-foreground font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="premium-btn px-8 py-4 text-primary-foreground rounded-2xl font-semibold inline-flex items-center gap-3"
          >
            View All Loan Products
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
