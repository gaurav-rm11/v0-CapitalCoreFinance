import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, Home, GraduationCap, Truck, TrendingUp, FileCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Loan Services - Capital Core Finance",
  description:
    "Explore our comprehensive loan services including business, housing, education, machinery loans and more.",
}

const loanCategories = [
  {
    slug: "business-loans",
    icon: Building2,
    title: "Business & Project Loans",
    shortDesc: "Funding for your business growth",
    description:
      "We help SMEs, startups, and corporates secure the best loan deals for business expansion, working capital, and project financing. Our expertise spans construction projects, commercial ventures, and inventory financing.",
  },
  {
    slug: "housing-loans",
    icon: Home,
    title: "Housing Loans",
    shortDesc: "Your dream home affordable",
    description:
      "Make homeownership dreams a reality with our flexible housing loan solutions. We assist with home purchases, property improvements, and refinancing options tailored to your financial situation.",
  },
  {
    slug: "education-loans",
    icon: GraduationCap,
    title: "Education Loans",
    shortDesc: "Invest in your future",
    description:
      "Pursue higher education without financial stress. Our education loans cover tuition fees, accommodation, books, and living expenses for domestic and international studies.",
  },
  {
    slug: "machinery-loans",
    icon: Truck,
    title: "Machinery & Equipment Loans",
    shortDesc: "Upgrade your assets",
    description:
      "Finance industrial machinery, agricultural equipment, commercial vehicles, and inventory. We provide equipment-specific financing solutions to boost your operational capacity.",
  },
  {
    slug: "restructuring",
    icon: TrendingUp,
    title: "Loan Restructuring & Problem Resolution",
    shortDesc: "Fix existing loan challenges",
    description:
      "Facing loan issues, NPA cases, or rejections? We restructure loans, improve credit scores, and resolve banking problems through strategic planning and expert negotiations.",
  },
  {
    slug: "prequal",
    icon: FileCheck,
    title: "Documentation & Pre-qualification",
    shortDesc: "Smooth loan approval process",
    description:
      "We manage all documentation, compliance, and pre-qualification support. Our experts ensure all paperwork is perfect and you're ready for rapid loan approval.",
  },
]

export default function Services() {
  return (
    <main>
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Loan Products & Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            Complete financing solutions tailored to your unique needs. Whether you're growing a business, buying a
            home, pursuing education, or upgrading equipment — we have the perfect loan solution for you.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanCategories.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group p-8 border border-border rounded-lg hover:border-primary bg-card hover:shadow-lg hover:bg-card transition-all duration-300"
                >
                  <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={28} />
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h2>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform text-sm">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
