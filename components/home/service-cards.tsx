import Link from "next/link"
import { ArrowRight, Building2, Home, GraduationCap, Truck } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Project & Business Loans",
    description: "Construction, commercial projects, and business expansion financing",
    href: "/services/business-loans",
  },
  {
    icon: Home,
    title: "Housing Loans",
    description: "Your dream home made affordable with flexible financing options",
    href: "/services/housing-loans",
  },
  {
    icon: Truck,
    title: "Machinery & Equipment Loans",
    description: "Inventory, machinery, and equipment financing for growth",
    href: "/services/machinery-loans",
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    description: "Hassle-free education financing for your academic dreams",
    href: "/services/education-loans",
  },
]

export default function ServiceCards() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Loan Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive financing solutions across multiple loan categories — tailored to your unique needs
            and aspirations.
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
            View All Loan Products
          </Link>
        </div>
      </div>
    </section>
  )
}
