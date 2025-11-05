import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies - Capital Core Finance",
  description:
    "Explore real-world examples of how Capital Core Finance helped businesses secure loans and overcome financial challenges.",
}

const caseStudies = [
  {
    title: "SME Bank Rejection Resolution",
    company: "R.K. Manufacturing Pvt Ltd",
    industry: "Manufacturing",
    challenge:
      "SME facing repeated bank loan rejections despite good business fundamentals due to poor documentation and credit history.",
    solution:
      "We restructured their loan application, improved financial documentation, and rebuilt their credit profile through strategic planning.",
    result: "₹80L working capital loan approved within 21 days",
    metrics: {
      "Time Saved": "3 months",
      "Loan Amount": "₹80 Lakhs",
      "Interest Rate": "8.5% (market rate)",
      "Processing Time": "21 days",
    },
    quote:
      "Capital Core turned our dream into reality. We had lost hope after multiple rejections, but their expertise and dedication made all the difference.",
  },
  {
    title: "NPA Recovery & Restructuring",
    company: "Sharma Textile Mills",
    industry: "Textiles",
    challenge:
      "Business facing NPA status with multiple unresolved loans, deteriorating credit score, and creditor pressure.",
    solution:
      "Comprehensive restructuring of all loans, debt consolidation, and negotiation with multiple banks to bring business back on track.",
    result: "Successfully resolved NPA, consolidated to single loan at better terms, business profitability recovered",
    metrics: {
      "Loans Consolidated": "3",
      "Interest Rate Reduction": "2.5%",
      "Monthly Savings": "₹2.5L",
      "NPA Status": "Resolved",
    },
    quote:
      "When we thought it was over, Capital Core gave us a second chance. Their restructuring strategy literally saved our business.",
  },
  {
    title: "Rapid Expansion Funding",
    company: "HealthFirst Diagnostics",
    industry: "Healthcare",
    challenge:
      "Growing healthcare company needed ₹3Cr for expansion across 5 new cities but lacked collateral and expansion funding experience.",
    solution:
      "Identified specialized healthcare lenders, structured expansion loan without additional collateral, managed multi-bank coordination.",
    result: "₹3Cr expansion loan secured in 45 days, all 5 new centers operational within 6 months",
    metrics: {
      "Loan Amount": "₹3 Crores",
      "New Centers": "5",
      "Revenue Growth": "85%",
      "Employee Additions": "150+",
    },
    quote:
      "Capital Core understood our growth vision and secured the funding without burdening us with excessive collateral demands.",
  },
  {
    title: "Startup Bridge to Series A",
    company: "TechAI Solutions",
    industry: "SaaS",
    challenge:
      "Early-stage startup needed working capital to reach profitability before Series A funding, traditional banks reluctant to lend.",
    solution:
      "Structured working capital through non-traditional lenders, provided business advisory to strengthen financial position.",
    result:
      "₹50L working capital secured, achieved profitability 4 months early, Series A funding secured at higher valuation",
    metrics: {
      "Loan Amount": "₹50 Lakhs",
      "Profitability Timeline": "4 months early",
      "Series A Valuation": "₹50Cr+",
      "MRR Growth": "35%",
    },
    quote:
      "Their guidance wasn't just financial — it shaped our entire business strategy. We attribute our success partly to their mentorship.",
  },
]

export default function CaseStudies() {
  return (
    <main className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Real examples of how Capital Core Finance solved complex financing challenges and helped businesses thrive.
        </p>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="p-8 border border-border rounded-lg bg-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                  <p className="text-muted-foreground">
                    {study.company} • {study.industry}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase">Challenge</h4>
                  <p className="text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase">Our Solution</h4>
                  <p className="text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase">Result</h4>
                  <p className="text-sm text-accent font-medium">{study.result}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-border">
                {Object.entries(study.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <p className="text-xl font-bold text-primary mb-1">{value}</p>
                    <p className="text-xs text-muted-foreground">{key}</p>
                  </div>
                ))}
              </div>

              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <p className="italic text-muted-foreground">"{study.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary text-primary-foreground rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Your Success Story Starts Here</h3>
          <p className="text-lg opacity-90 mb-6">
            Let's work together to overcome your financing challenges and unlock growth opportunities for your business.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </main>
  )
}
