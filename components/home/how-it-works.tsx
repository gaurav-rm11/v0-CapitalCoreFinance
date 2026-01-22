"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, MessageSquare, FileSearch, Building2, CheckCircle2, Sparkles } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "We assess your financial requirements and business profile to identify the most suitable loan products for your needs",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Documentation & Analysis",
    description: "Our experts review your financial documents, credit profile, and business metrics to structure the optimal loan proposal",
  },
  {
    number: "03",
    icon: Building2,
    title: "Lender Negotiation",
    description: "We leverage our banking relationships to secure competitive rates and favorable terms on your behalf",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Loan Disbursement",
    description: "Upon approval, we facilitate quick disbursement of funds to accelerate your business growth and financial goals",
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".step-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
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
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-16 md:py-32 bg-black relative overflow-hidden"
    >
      {/* Background Image Layer - Same as Service Section */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/service-bg.png')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[100px] translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[80px] -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="h-px w-12 bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/60" />
            <span className="text-white/80 font-medium text-xs md:text-sm tracking-widest uppercase">Loan Process</span>
            <div className="w-2 h-2 rounded-full bg-white/60" />
            <div className="h-px w-12 bg-white/30" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Our Loan <span className="text-accent italic">Process</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Our streamlined approach ensures efficient loan processing with transparent communication, 
            competitive rates, and personalized financial solutions tailored to your business objectives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="step-card group relative">
                {/* Connector Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[2.5rem] left-[60%] w-[calc(100%+2rem)] h-[2px] bg-white/10 z-0">
                    <div className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                  </div>
                )}

                <div className="relative bg-[#1c1c2e]/90 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg h-full hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2 hover:border-accent/50 transition-all duration-300 z-10">
                  {/* Watermark Number */}
                  <div className="absolute -top-6 -right-4 text-7xl font-bold text-white/20 group-hover:text-accent/30 transition-colors select-none font-serif leading-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center shadow-lg shadow-accent/10 mb-8 group-hover:scale-110 group-hover:bg-accent/30 transition-all duration-300">
                    <Icon className="text-accent w-8 h-8" />
                  </div>

                  <h3 className="font-bold text-xl mb-4 text-white group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-black rounded-full font-semibold hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
          >
            Start Your Loan Application
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
