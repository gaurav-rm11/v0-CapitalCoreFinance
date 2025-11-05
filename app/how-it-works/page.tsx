import type { Metadata } from "next"
import { CheckCircle, Clock, FileText, CreditCard } from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works - Capital Core Finance",
  description: "Learn our simple 4-step process to get your business funded with Capital Core Finance.",
}

const steps = [
  {
    number: "1",
    icon: Clock,
    title: "Free Consultation",
    description:
      "We begin with an in-depth consultation to understand your business, financing needs, and goals. This helps us determine the best loan options for your situation.",
    details: [
      "Business overview and revenue details",
      "Loan amount and purpose",
      "Timeline requirements",
      "Previous loan experience",
    ],
  },
  {
    number: "2",
    icon: FileText,
    title: "Document Review & Eligibility Assessment",
    description:
      "Our team thoroughly reviews your financial documents and assesses your eligibility across multiple lending options.",
    details: [
      "Financial statement analysis",
      "CIBIL score review",
      "Collateral evaluation",
      "Eligibility determination",
    ],
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Bank Match & Loan Application",
    description:
      "We identify the best-matched banks and lenders for your profile, prepare your application, and manage the entire submission process.",
    details: ["Bank identification", "Application preparation", "Document compilation", "Bank coordination"],
  },
  {
    number: "4",
    icon: CreditCard,
    title: "Approval & Disbursement",
    description:
      "Once approved, we coordinate with the bank to ensure smooth disbursement of your loan and provide post-approval support.",
    details: ["Approval tracking", "Disbursement coordination", "Post-approval support", "Ongoing relationship"],
  },
]

export default function HowItWorks() {
  return (
    <main className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Our proven 4-step process ensures a smooth journey from consultation to loan approval and disbursement.
        </p>

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-24 w-24 rounded-full bg-primary text-primary-foreground text-3xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="text-accent" size={24} />
                    <h2 className="text-2xl font-bold">{step.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-accent flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-8 bg-accent/10 border border-accent/20 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">
            Schedule your free consultation with our experts today and take the first step towards funding your
            business.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </main>
  )
}
