import Link from "next/link"
import { ArrowRight, Briefcase, TrendingUp, Building2, FileCheck } from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Business Loans",
    description: "Get your loan approved quickly with expert guidance",
    href: "/services/business-loans",
  },
  {
    icon: TrendingUp,
    title: "Loan Restructuring",
    description: "Fix loan issues, improve CIBIL, and resolve NPA cases",
    href: "/services/restructuring",
  },
  {
    icon: Building2,
    title: "Corporate Finance",
    description: "End-to-end finance strategy for business growth",
    href: "/services/corporate-finance",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Hassle-free paperwork & bank coordination",
    href: "/services/prequal",
  },
]

export default function ServiceCards() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer end-to-end solutions for business financing — from securing new loans to resolving existing
            challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group p-6 border border-border rounded-lg hover:border-primary hover:bg-card transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
