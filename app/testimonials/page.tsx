import type { Metadata } from "next"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Client Testimonials - Capital Core Finance",
  description:
    "Read success stories from our 100+ satisfied clients who have successfully secured loans with our guidance.",
}

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Tech Startup India",
    service: "Business Loan",
    amount: "₹50 Lakhs",
    content:
      "Capital Core helped us secure a 50L business loan in just 3 weeks. The process was smooth and transparent. The team was incredibly supportive throughout the entire journey.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Manufacturing Ltd",
    service: "Loan Restructuring",
    amount: "₹200 Lakhs",
    content:
      "We were struggling with NPA issues and had given up hope. Their team restructured our loan and improved our financial position significantly. They literally saved our business.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    company: "Consulting Group",
    service: "Corporate Advisory",
    amount: "₹100 Lakhs",
    content:
      "25+ years of experience really shows. They provided strategic guidance that transformed our business approach and helped us secure better loan terms than we could have alone.",
    rating: 5,
  },
  {
    name: "Sneha Desai",
    company: "E-commerce Platform",
    service: "Working Capital",
    amount: "₹75 Lakhs",
    content:
      "The documentation support was invaluable. They handled everything so efficiently that we could focus on running our business. Highly recommended for any entrepreneur seeking financing.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "Import-Export Business",
    service: "Business Loan",
    amount: "₹150 Lakhs",
    content:
      "From first contact to disbursement, Capital Core was professional and results-oriented. They matched us with the right bank and negotiated favorable terms. Best decision we made.",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    company: "Healthcare Services",
    service: "Expansion Loan",
    amount: "₹300 Lakhs",
    content:
      "Their expertise in the healthcare finance sector was impressive. They understood our business model and secured us a loan at excellent terms. We're now opening 3 new centers.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <main className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          From startups to corporates — 100+ clients have trusted us to get their loans approved and their businesses
          funded.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border border-border rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">{testimonial.content}</p>

              <div className="border-t border-border pt-4 space-y-2">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                <div className="flex items-center justify-between pt-2">
                  <p className="text-sm text-accent font-medium">{testimonial.service}</p>
                  <p className="text-sm font-semibold text-primary">{testimonial.amount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Be Our Next Success Story</h3>
          <p className="text-muted-foreground mb-6">
            Join 100+ businesses that have successfully funded their dreams with Capital Core Finance.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </main>
  )
}
