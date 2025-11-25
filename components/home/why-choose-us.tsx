import { CheckCircle } from "lucide-react"

const reasons = [
  {
    title: "Experience That Matters",
    description: "18+ years of combined financial expertise across multiple loan categories",
  },
  {
    title: "Proven Results",
    description: "500+ clients successfully funded with 95% approval rate",
  },
  {
    title: "Tailored Solutions",
    description: "Customized guidance designed for your unique financing needs",
  },
  {
    title: "End-to-End Support",
    description: "From documentation to disbursement, we handle every step",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why 500+ Clients Trust Capital Core</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence and client success drives everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 pt-1">
                <CheckCircle className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
