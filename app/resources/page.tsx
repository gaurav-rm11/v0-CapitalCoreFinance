"use client"

import { useState, useRef, useEffect } from "react"
import { Download, FileText, CheckCircle, Clock, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ResourceDownloadModal from "@/components/resource-download-modal"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const resources = [
  {
    title: "Personal Loan - Document Requirements",
    description:
      "Complete checklist for personal loan applications including KYC documents, income proof, and requirements for both secured and unsecured personal loans.",
    category: "Document Checklist",
    downloadUrl: "/downloads/personal-loan.pdf",
    icon: FileText,
  },
  {
    title: "Home Loan - Document Requirements",
    description:
      "Comprehensive documentation guide for home loans covering salaried, self-employed, and business owner applicants. Includes property verification requirements.",
    category: "Document Checklist",
    downloadUrl: "/downloads/home-loan.pdf",
    icon: FileText,
  },
  {
    title: "Business Loan - Document Requirements",
    description:
      "Essential documents for business loans including registration certificates, GST returns, financial statements, and requirements for secured and unsecured loans.",
    category: "Document Checklist",
    downloadUrl: "/downloads/business-loan.pdf",
    icon: FileText,
  },
  {
    title: "Real Estate & Project Loans - Documents",
    description:
      "Complete documentation guide for real estate and project financing including site purchase, construction loans, and commercial property financing.",
    category: "Document Checklist",
    downloadUrl: "/downloads/real-estate-project-loans.pdf",
    icon: FileText,
  },
  {
    title: "Educational Loan - Document Requirements",
    description:
      "Step-by-step documentation guide for education loans covering domestic and international studies with detailed checklist and eligibility criteria.",
    category: "Document Checklist",
    downloadUrl: "/downloads/educational-loan.pdf",
    icon: FileText,
  },
  {
    title: "Loan Against Property - Document Requirements",
    description:
      "Complete guide for loan against property including property documents, valuation requirements, legal verification, and income documentation.",
    category: "Document Checklist",
    downloadUrl: "/downloads/loan-against-property.pdf",
    icon: FileText,
  },
]

const benefits = [
  {
    icon: CheckCircle,
    title: "Comprehensive Checklists",
    description: "Complete documentation requirements for all loan types",
  },
  {
    icon: Clock,
    title: "Faster Processing",
    description: "Organized documents speed up your loan approval",
  },
  {
    icon: Shield,
    title: "Expert Verified",
    description: "All checklists verified by our financial experts",
  },
]

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState<(typeof resources)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  const handleDownload = (resource: (typeof resources)[0]) => {
    setSelectedResource(resource)
    setIsModalOpen(true)
  }

  return (
    <main>
      {/* Hero Section - Bright */}
      <section ref={heroRef} className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <span className="hero-animate inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 px-4 py-2 rounded-full">
              Free Resources
            </span>
            <h1 className="hero-animate text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">
              Loan Documentation Resources
            </h1>
            <p className="hero-animate text-xl text-gray-600 leading-relaxed">
              Download comprehensive document checklists for various loan types. Get organized and speed up your loan
              approval process.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section - Dark */}
      <section className="py-16 md:py-20 bg-black relative overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/service-bg.png')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Why Use Our Resources?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Expert-curated documentation guides to streamline your loan application
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resources List - Bright */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Available Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download free documentation checklists for your loan application
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 border-2 border-gray-200 rounded-2xl bg-white hover:shadow-xl hover:border-accent/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2 gap-3">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-accent transition-colors">
                          {resource.title}
                        </h3>
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                          PDF
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{resource.description}</p>
                      <button
                        onClick={() => handleDownload(resource)}
                        className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all text-sm group-hover:text-accent/80"
                      >
                        <Download size={16} />
                        Download Free
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {selectedResource && (
        <ResourceDownloadModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedResource(null)
          }}
          resourceTitle={selectedResource.title}
          resourceUrl={selectedResource.downloadUrl}
        />
      )}
    </main>
  )
}
