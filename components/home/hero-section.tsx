import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm font-medium">Empowering Businesses</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
            Smarter Financing for Your Business
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl opacity-90 mb-8 text-balance">
            25+ years of combined expertise helping 100+ businesses secure, restructure, and grow through effective loan
            consulting.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Get Pre-Qualified
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Learn Our Process
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="font-bold text-2xl">100+</div>
              <div className="text-sm opacity-75">Clients Served</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="font-bold text-2xl">25+</div>
              <div className="text-sm opacity-75">Years Experience</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="font-bold text-2xl">95%</div>
              <div className="text-sm opacity-75">Approval Rate</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="font-bold text-2xl">Bengaluru</div>
              <div className="text-sm opacity-75">Based</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
