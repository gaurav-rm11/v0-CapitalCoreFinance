import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Capital Core Finance",
  description: "Our terms of service outline the rules and conditions for using Capital Core Finance services.",
}

export default function Terms() {
  return (
    <main className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: November 2025</p>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Capital Core Finance's website and services, you agree to be bound by these Terms
              of Service. If you do not agree to abide by any of these terms, you are instructed not to use this
              service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on our website for personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
              this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software on the website</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">3. Disclaimer</h2>
            <p>
              The materials on Capital Core Finance's website are provided on an 'as is' basis. Capital Core Finance
              makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">4. Limitations</h2>
            <p>
              In no event shall Capital Core Finance or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on Capital Core Finance's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Capital Core Finance's website could include technical, typographical, or
              photographic errors. Capital Core Finance does not warrant that any of the materials on its website are
              accurate, complete, or current. Capital Core Finance may make changes to the materials contained on its
              website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">6. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              Email: legal@capitalcore.com
              <br />
              Phone: +91-XXXXXXXXXX
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
