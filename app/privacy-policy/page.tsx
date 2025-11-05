import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Capital Core Finance",
  description: "Our privacy policy outlines how we protect your personal and business information.",
}

export default function PrivacyPolicy() {
  return (
    <main className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: November 2025</p>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">1. Introduction</h2>
            <p>
              Capital Core Finance ("we," "us," "our," or "Company") is committed to protecting your privacy. This
              Privacy Policy explains our data practices and your rights regarding your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">2. Information We Collect</h2>
            <p>We collect information you provide directly and information collected automatically:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Personal information: name, email, phone, company details</li>
              <li>Financial information: loan amount, business revenue, creditworthiness</li>
              <li>Usage data: cookies, analytics, browsing behavior</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Process loan applications and provide consulting services</li>
              <li>Communicate with you about services and updates</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized
              access, alteration, and destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. Contact us to exercise these
              rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">6. Contact Us</h2>
            <p>
              For privacy concerns or questions about this policy, please contact us at:
              <br />
              Email: privacy@capitalcore.com
              <br />
              Phone: +91-XXXXXXXXXX
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
