import type { Metadata } from "next"
import Link from "next/link"
import { Home, Key, Paintbrush, ArrowLeftRight, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Housing Loans - Capital Core Finance",
  description:
    "Make homeownership dreams a reality. Home purchase loans, renovation financing, and balance transfer options with competitive rates.",
}

const housingTypes = [
  {
    icon: Key,
    title: "Home Purchase Loan",
    description: "Buy your dream home with flexible financing options and competitive interest rates.",
    features: ["Up to 90% of property value", "Tenure up to 30 years", "Fixed & floating rates available"],
  },
  {
    icon: Paintbrush,
    title: "Home Renovation Loan",
    description: "Upgrade, renovate, or expand your existing home with dedicated financing.",
    features: ["Quick processing", "Minimal documentation", "Top-up on existing loans"],
  },
  {
    icon: ArrowLeftRight,
    title: "Balance Transfer",
    description: "Transfer your existing home loan to us for better rates and save on interest.",
    features: ["Lower interest rates", "Reduced EMI burden", "Top-up facility available"],
  },
  {
    icon: Home,
    title: "Plot + Construction",
    description: "Combined financing for land purchase and subsequent construction on it.",
    features: ["Single loan for both", "Phased disbursement", "Flexible repayment"],
  },
]

export default function HousingLoans() {
  return (
    <main className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <Home size={18} />
            Housing Finance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Housing Loans</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your dream home is within reach. We offer comprehensive housing loan solutions with competitive rates and
            flexible terms to make homeownership affordable.
          </p>
        </div>

        {/* Housing Types Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {housingTypes.map((type, index) => {
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

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Why Choose Our Housing Loans?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Low Interest", desc: "Starting from 8.5% p.a." },
              { title: "Quick Approval", desc: "In-principle approval in 48 hours" },
              { title: "Tax Benefits", desc: "Save under Section 80C & 24" },
              { title: "Zero Prepayment", desc: "No charges on floating rate" },
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-primary/5 rounded-xl text-center">
                <h4 className="font-bold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility & Documentation */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-primary/5 border border-primary/10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Eligibility</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Age: 21-65 years at loan maturity
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Salaried or self-employed individuals
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Minimum income: ₹25,000/month
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                CIBIL score: 700+ preferred
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Employment stability: 2+ years
              </li>
            </ul>
          </div>
          <div className="p-8 bg-card border border-border rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Documents Required</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Identity & address proof (PAN, Aadhaar)</li>
              <li>✓ Last 6 months salary slips (salaried)</li>
              <li>✓ Last 6-12 months bank statements</li>
              <li>✓ Form 16 / ITR for 2-3 years</li>
              <li>✓ Property documents and agreement</li>
              <li>✓ Processing fee cheque</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to Own Your Dream Home?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our housing loan experts will help you find the perfect financing solution. Get pre-approved today!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
          >
            Apply for Home Loan <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  )
}
