import Link from "next/link"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Free Consultation",
    description: "We understand your business needs and loan requirements",
  },
  {
    number: "2",
    title: "Document Review",
    description: "We analyze your financial profile and eligibility",
  },
  {
    number: "3",
    title: "Bank Coordination",
    description: "We manage application and bank negotiations",
  },
  {
    number: "4",
    title: "Approval & Funds",
    description: "You receive your loan and grow your business",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our simple 4-step process to get your business funded.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                {index < steps.length - 1 && <div className="hidden md:flex flex-1 mx-2 h-1 bg-accent/30"></div>}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Learn Our Detailed Process <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
