"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Resources", href: "/resources" },
  ]

  const services = [
    { label: "Business Loans", href: "/services/business-loans" },
    { label: "Project Loans", href: "/services/project-loans" },
    { label: "Housing Loans", href: "/services/housing-loans" },
    { label: "Education Loans", href: "/services/education-loans" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/50 border-t border-border">
      {/* Top CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Ready to get started?</h3>
            <p className="text-muted-foreground">Get pre-qualified for your loan in minutes</p>
          </div>
          <Link
            href="/contact"
            className="premium-btn-gold px-8 py-4 text-accent-foreground rounded-2xl font-semibold inline-flex items-center gap-2 whitespace-nowrap"
          >
            Get Pre-Qualified
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Capital Core Finance Logo"
                  width={44}
                  height={44}
                  className="rounded-xl"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-foreground tracking-tight">Capital Core</span>
                <span className="block text-xs text-muted-foreground -mt-0.5">Finance Consultants</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering businesses and individuals with smarter financing solutions since 2020. Your trusted partner
              for all loan needs.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">Yelahanka, Bengaluru, Karnataka</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-accent" />
                </div>
                <div className="space-y-1">
                  <a
                    href="tel:+919975985314"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm block"
                  >
                    +91 99759 85314
                  </a>
                  <a
                    href="tel:+919902545483"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm block"
                  >
                    +91 99025 45483
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <a
                  href="mailto:info@capitalcore.com"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  info@capitalcore.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Capital Core Finance. All rights reserved.</p>
          <div className="flex gap-6">
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
        </div>
      </div>
    </footer>
  )
}
