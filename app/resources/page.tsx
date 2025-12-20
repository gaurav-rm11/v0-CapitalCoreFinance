"use client"

import { useState } from "react"
import { Download, FileText } from "lucide-react"
import ResourceDownloadModal from "@/components/resource-download-modal"

const resources = [
  {
    title: "Personal Loan - Document Requirements",
    description:
      "Complete checklist for personal loan applications including KYC documents, income proof, and requirements for both secured and unsecured personal loans.",
    category: "Document Checklist",
    downloadUrl: "/downloads/personal-loan.pdf",
  },
  {
    title: "Home Loan - Document Requirements",
    description:
      "Comprehensive documentation guide for home loans covering salaried, self-employed, and business owner applicants. Includes property verification requirements.",
    category: "Document Checklist",
    downloadUrl: "/downloads/home-loan.pdf",
  },
  {
    title: "Business Loan - Document Requirements",
    description:
      "Essential documents for business loans including registration certificates, GST returns, financial statements, and requirements for secured and unsecured loans.",
    category: "Document Checklist",
    downloadUrl: "/downloads/business-loan.pdf",
  },
  {
    title: "Real Estate & Project Loans - Documents",
    description:
      "Complete documentation guide for real estate and project financing including site purchase, construction loans, and commercial property financing.",
    category: "Document Checklist",
    downloadUrl: "/downloads/real-estate-project-loans.pdf",
  },
  {
    title: "Educational Loan - Document Requirements",
    description:
      "Step-by-step documentation guide for education loans covering domestic and international studies with detailed checklist and eligibility criteria.",
    category: "Document Checklist",
    downloadUrl: "/downloads/educational-loan.pdf",
  },
  {
    title: "Loan Against Property - Document Requirements",
    description:
      "Complete guide for loan against property including property documents, valuation requirements, legal verification, and income documentation.",
    category: "Document Checklist",
    downloadUrl: "/downloads/loan-against-property.pdf",
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Loan Documentation Resources</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Download comprehensive document checklists for various loan types. Get organized and speed up your loan
          approval process.
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
          <h3 className="text-2xl font-bold mb-4">Need Personalized Assistance?</h3>
          <p className="text-muted-foreground mb-6">
            Our loan experts are ready to help you with document preparation, bank selection, and faster approvals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
            <a
              href="tel:+919975985314"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              Call Now
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
