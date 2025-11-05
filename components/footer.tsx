import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">C</span>
              </div>
              <h3 className="font-bold">Capital Core Finance</h3>
            </div>
            <p className="text-sm text-muted-foreground">Empowering businesses with smarter financing since 2020.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/business-loans"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Business Loans
                </Link>
              </li>
              <li>
                <Link
                  href="/services/restructuring"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Loan Restructuring
                </Link>
              </li>
              <li>
                <Link
                  href="/services/corporate-finance"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Corporate Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/prequal"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-muted-foreground">Yelahanka, Bengaluru, Karnataka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-foreground transition-colors">
                  +91-XXXXXXXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent" />
                <a
                  href="mailto:info@capitalcore.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@capitalcore.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Capital Core Finance. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="flex gap-3">
            <a
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
