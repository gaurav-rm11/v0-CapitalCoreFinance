import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Capital Core Finance",
  description:
    "Learn about our founders, 18+ years of combined expertise, and mission to provide complete financing solutions.",
}

export default function About() {
  return (
    <main>
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Capital Core Finance</h1>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            18+ years of combined experience, 500+ clients guided, one mission — providing accessible and transparent
            financing solutions for every dream.
          </p>

          <div className="space-y-12">
            {/* Story */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Capital Core Finance was founded with a simple mission: to make financing accessible and transparent for
                businesses, homebuyers, students, and entrepreneurs. We saw countless individuals struggling with
                complex loan processes, rejections, and unclear guidance across multiple loan categories.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we've helped 500+ clients secure funding across business loans, housing, education, machinery,
                and project financing. Every client is treated as a partner, and their success is our success.
              </p>
            </section>

            {/* Founders */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Meet Our Founders</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Harshavardhan N</h3>
                  <p className="text-accent font-medium mb-4">Business & Project Finance Expert</p>
                  <p className="text-muted-foreground">
                    With 9+ years of experience in business lending, project financing, and financial strategy,
                    Harshavardhan has successfully guided 300+ clients to secure life-changing loans. His expertise in
                    bank relationships and loan structuring across multiple categories has earned the trust of financial
                    institutions and clients alike.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Hase Ashirwad</h3>
                  <p className="text-accent font-medium mb-4">Financial Advisory & Loan Solutions Specialist</p>
                  <p className="text-muted-foreground">
                    Hase brings 9+ years of experience in comprehensive financial advisory, housing finance, and banking
                    relations. Specializing in loan restructuring, education finance, and personalized financial
                    planning, Hase has helped clients from diverse backgrounds achieve their financial aspirations.
                  </p>
                </div>
              </div>
            </section>

            {/* Milestones */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Our Milestones</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-card border border-border rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <p className="text-muted-foreground">Clients Helped</p>
                </div>
                <div className="p-6 bg-card border border-border rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-2">₹1000Cr+</div>
                  <p className="text-muted-foreground">Financing Facilitated</p>
                </div>
                <div className="p-6 bg-card border border-border rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-2">18+</div>
                  <p className="text-muted-foreground">Years Combined Experience</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center pt-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Work With Us?</h3>
              <p className="text-muted-foreground mb-6">Schedule a free consultation with our experts today.</p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
