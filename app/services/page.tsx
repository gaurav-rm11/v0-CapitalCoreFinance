import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Services - Capital Core Finance",
  description:
    "Explore our comprehensive business financing services including business loans, restructuring, and corporate advisory.",
}

const services = [
  {
    slug: "business-loans",
    title: "Business Loans",
    shortDesc: "Get your loan approved quickly with expert guidance",
    description:
      "We help SMEs and corporates secure the best loan deals with minimal hassle. Our expertise spans working capital loans, term loans, and equipment financing.",
  },
  {
    slug: "restructuring",
    title: "Loan Restructuring & Problem Resolution",
    shortDesc: "Fix loan issues, improve CIBIL, and resolve NPA cases",
    description:
      "Facing loan issues, delays, or rejections? We help restructure your loans and fix credit challenges through strategic planning and bank negotiations.",
  },
  {
    slug: "corporate-finance",
    title: "Corporate Financial Advisory",
    shortDesc: "End-to-end finance strategy for business growth",
    description:
      "Guiding corporates through expansion, funding, and capital structuring decisions. We provide strategic financial guidance tailored to your business goals.",
  },
  {
    slug: "prequal",
    title: "Documentation & Pre-qualification",
    shortDesc: "Hassle-free paperwork & bank coordination",
    description:
      "We manage all documentation, compliance, and pre-qualification support to ensure a smooth loan approval process.",
  },
]

export default function Services() {
  return (
    <main>
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            We offer end-to-end solutions for business financing — from securing new loans to resolving existing
            challenges.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-8 border border-border rounded-lg hover:border-primary bg-card hover:shadow-lg transition-all"
              >
                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h2>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight size={18} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
