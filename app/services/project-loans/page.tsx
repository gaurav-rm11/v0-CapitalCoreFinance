import type { Metadata } from "next"
import Link from "next/link"
import { HardHat, Landmark, Home, Hotel, Building2, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Project Loans - Capital Core Finance",
  description:
    "Construction loans, site purchase loans, flat purchase loans, resort development financing, and commercial infrastructure setup loans.",
}

const projectTypes = [
  {
    icon: Home,
    title: "Site & Flat Purchase Loans",
    description: "Finance your land or flat purchase with competitive rates and flexible repayment options.",
    features: ["Up to 80% of property value", "Tenure up to 20 years", "Quick property evaluation"],
  },
  {
    icon: HardHat,
    title: "Construction Loans",
    description: "Fund your residential or commercial construction projects from foundation to completion.",
    features: ["Phased disbursement", "Interest on utilized amount only", "Technical assistance available"],
  },
  {
    icon: Hotel,
    title: "Resort & Hotel Development",
    description: "Specialized financing for hospitality projects including resorts, hotels, and service apartments.",
    features: ["Higher loan amounts", "Industry-specific terms", "Extended moratorium periods"],
  },
  {
    icon: Building2,
    title: "Commercial Building Loans",
    description: "Finance office buildings, shopping complexes, warehouses, and industrial facilities.",
    features: ["Flexible collateral options", "Revenue-based repayment", "Expert project evaluation"],
  },
]

export default function ProjectLoans() {
  return (
    <main className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <Landmark size={18} />
            Project Financing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Project Loans</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financing solutions for construction and development projects. From land purchase to project
            completion, we fund your vision.
          </p>
        </div>

        {/* Project Types Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projectTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Eligibility & Documentation */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-primary/5 border border-primary/10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Eligibility Requirements</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Clear land title or property documents
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Approved building plans and permits
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Minimum 20-25% self-contribution
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Income proof or business financials
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                CIBIL score 650+ preferred
              </li>
            </ul>
          </div>
          <div className="p-8 bg-card border border-border rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Documents Required</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Property documents and title deed</li>
              <li>✓ Approved building plans and NOCs</li>
              <li>✓ Project cost estimation and timeline</li>
              <li>✓ Last 6-12 months bank statements</li>
              <li>✓ KYC documents (PAN, Aadhaar)</li>
              <li>✓ Income proof or ITR for 2-3 years</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to Start Your Project?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our project finance experts will evaluate your plans and help secure the best funding options for your
            construction or development project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
          >
            Get Project Financing <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  )
}
