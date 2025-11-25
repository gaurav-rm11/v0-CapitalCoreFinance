"use client"

import { useState } from "react"
import { Download, FileText } from "lucide-react"
import ResourceDownloadModal from "@/components/resource-download-modal"

const resources = [
  {
    title: "Business Loan Document Checklist",
    description:
      "Complete checklist of all documents typically required for business loan applications. Download and ensure you have everything ready.",
    category: "Checklist",
    downloadUrl: "/downloads/business-loan-checklist.pdf",
  },
  {
    title: "How to Improve Your Business CIBIL Score",
    description:
      "Comprehensive guide on understanding CIBIL scores and actionable steps to improve your creditworthiness for better loan terms.",
    category: "Guide",
    downloadUrl: "/downloads/improve-cibil-score.pdf",
  },
  {
    title: "Top 5 Reasons Bank Loans Get Rejected",
    description:
      "Learn the most common reasons why loan applications are rejected and how to avoid these pitfalls across all loan categories.",
    category: "Article",
    downloadUrl: "/downloads/loan-rejection-reasons.pdf",
  },
  {
    title: "Complete Guide to Housing Loans",
    description:
      "Everything you need to know about home loans — eligibility, documentation, EMI calculation, and the approval process.",
    category: "Guide",
    downloadUrl: "/downloads/housing-loan-guide.pdf",
  },
  {
    title: "Education Loan: Your Study Abroad Handbook",
    description:
      "Step-by-step guide for securing education loans for domestic and international studies with minimal paperwork.",
    category: "Handbook",
    downloadUrl: "/downloads/education-loan-handbook.pdf",
  },
  {
    title: "Loan Restructuring: Complete Guide",
    description:
      "In-depth guide explaining loan restructuring, when you need it, and how it can help resolve financial challenges.",
    category: "Guide",
    downloadUrl: "/downloads/loan-restructuring-guide.pdf",
  },
]

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState<(typeof resources)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDownload = (resource: (typeof resources)[0]) => {
    setSelectedResource(resource)
    setIsModalOpen(true)
  }

  return (
    <main className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Guides</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Free resources to help you make informed decisions about financing and navigate the loan process with
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
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded whitespace-nowrap">
                      {resource.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <button
                    onClick={() => handleDownload(resource)}
                    className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all hover:text-primary/80"
                  >
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

      {/* Download Modal */}
      {selectedResource && (
        <ResourceDownloadModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedResource(null)
          }}
          resourceTitle={selectedResource.title}
          resourceUrl={selectedResource.downloadUrl}
        />
      )}
    </main>
  )
}
