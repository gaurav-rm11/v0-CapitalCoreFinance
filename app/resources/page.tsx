import type { Metadata } from "next"
import { Download, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Resources - Capital Core Finance",
  description:
    "Access free guides, checklists, and resources to help you navigate business financing and loan processes.",
}

const resources = [
  {
    title: "Business Loan Document Checklist",
    description:
      "Complete checklist of all documents typically required for business loan applications. Download and ensure you have everything ready.",
    category: "Checklist",
    downloadUrl: "#",
  },
  {
    title: "How to Improve Your Business CIBIL Score",
    description:
      "Comprehensive guide on understanding CIBIL scores and actionable steps to improve your creditworthiness for better loan terms.",
    category: "Guide",
    downloadUrl: "#",
  },
  {
    title: "Top 5 Reasons Bank Loans Get Rejected",
    description:
      "Learn the most common reasons why business loan applications are rejected and how to avoid these pitfalls.",
    category: "Article",
    downloadUrl: "#",
  },
  {
    title: "Loan Restructuring: Everything You Need to Know",
    description:
      "In-depth guide explaining loan restructuring, when you need it, and how it can help resolve financial challenges.",
    category: "Guide",
    downloadUrl: "#",
  },
]

export default function Resources() {
  return (
    <main className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Guides</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Free resources to help you make informed decisions about business financing and navigate the loan process with
          confidence.
        </p>

        <div className="space-y-4 mb-12">
          {resources.map((resource, index) => (
            <div key={index} className="p-6 border border-border rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <FileText className="text-accent flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2 gap-4">
                    <h3 className="text-lg font-semibold">{resource.title}</h3>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                      {resource.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    <Download size={16} />
                    Download Free
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 bg-accent/10 border border-accent/20 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6">
            Chat with us directly or book a consultation with our financing experts. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              Chat Now
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
