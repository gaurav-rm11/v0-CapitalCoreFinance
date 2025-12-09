import type { Metadata } from "next"
import Link from "next/link"
import { TrendingUp, ShieldCheck, FileWarning, HandshakeIcon, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Loan Restructuring & NPA Resolution - Capital Core Finance",
  description:
    "Expert loan restructuring, NPA resolution, credit repair, and debt consolidation services. Fix existing loan challenges with our help.",
}

const services = [
  {
    icon: FileWarning,
    title: "NPA Resolution",
    description: "Expert assistance in resolving Non-Performing Asset cases through negotiation and settlement.",
    features: ["One-time settlement negotiation", "Recovery agent management", "Legal support coordination"],
  },
  {
    icon: TrendingUp,
    title: "Credit Score Improvement",
    description: "Strategic guidance to repair and improve your credit score for future loan eligibility.",
    features: ["Credit report analysis", "Dispute resolution", "Score improvement roadmap"],
  },
  {
    icon: HandshakeIcon,
    title: "Debt Consolidation",
    description: "Combine multiple high-interest loans into a single manageable loan with lower EMI.",
    features: ["Single EMI benefit", "Lower overall interest", "Simplified management"],
  },
  {
    icon: ShieldCheck,
    title: "Loan Restructuring",
    description: "Renegotiate loan terms with banks for extended tenure, lower rates, or modified payment schedules.",
    features: ["Tenure extension", "Rate renegotiation", "EMI restructuring"],
  },
]

export default function Restructuring() {
  return (
    <main className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <TrendingUp size={18} />
            Financial Recovery
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Loan Restructuring & Recovery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Facing loan challenges? We specialize in resolving NPAs, improving credit scores, and restructuring loans to
            get your finances back on track.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
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

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Resolution Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assessment", desc: "Analyze your current loan situation and challenges" },
              { step: "02", title: "Strategy", desc: "Develop a customized resolution or restructuring plan" },
              { step: "03", title: "Negotiation", desc: "Engage with banks and lenders on your behalf" },
              { step: "04", title: "Resolution", desc: "Implement the solution and monitor progress" },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-primary/5 rounded-xl text-center relative">
                <span className="text-5xl font-bold text-primary/20 absolute top-4 right-4">{item.step}</span>
                <h4 className="font-bold text-foreground mb-2 relative">{item.title}</h4>
                <p className="text-sm text-muted-foreground relative">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* When to Seek Help */}
        <div className="mb-16 p-8 bg-accent/10 border border-accent/20 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">When to Seek Restructuring Help?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Missed 2 or more consecutive EMIs",
              "Received notices from banks or recovery agents",
              "Loan account classified as NPA",
              "Multiple loans with high combined EMI",
              "Business downturn affecting repayment capacity",
              "Credit score dropped significantly",
              "Facing legal action from lenders",
              "Need to negotiate one-time settlement",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg">
                <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Need Help With Loan Issues?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let loan problems overwhelm you. Our experts have helped hundreds of clients resolve their financial
            challenges. Confidential consultation guaranteed.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
          >
            Get Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  )
}
