import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business Loans - Capital Core Finance",
  description: "Expert business loan consulting. Help securing loans up to ₹5Cr for SMEs and corporations.",
}

export default function BusinessLoans() {
  return (
    <main className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Loans</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Get your loan approved quickly with expert guidance. We help SMEs and corporates secure the best loan deals
          with minimal hassle.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Working Capital Loans up to ₹2Cr</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Term Loans for equipment and machinery</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Expansion Loans for business growth</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Trade Finance and invoice discounting</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Eligibility Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">Business Requirements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Business registration/GST</li>
                  <li>• Minimum 2 years turnover</li>
                  <li>• GST returns filed</li>
                  <li>• Bank statements available</li>
                </ul>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">Credit Requirements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• CIBIL score 550+ preferred</li>
                  <li>• Clear credit history</li>
                  <li>• No recent defaults</li>
                  <li>• Current on existing EMIs</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Documentation Needed</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Last 12-24 months GST returns and bank statements</li>
              <li>✓ Business financials and profit & loss statements</li>
              <li>✓ PAN and Aadhaar of promoters/directors</li>
              <li>✓ Current liabilities and existing loan details</li>
              <li>✓ Collateral details if applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Choose Our Business Loan Service?</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Fast approval process - loans sanctioned in 15-21 days</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Access to 15+ national and regional banks</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Better interest rates through our bank relationships</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>End-to-end support from application to disbursement</span>
              </li>
            </ul>
          </section>

          <div className="p-8 bg-accent/10 border border-accent/20 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Business Loan?</h3>
            <p className="text-muted-foreground mb-6">
              Let our experts guide you through the process and get your business the funding it deserves.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Start Your Application
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
