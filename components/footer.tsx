import Link from "next/link"
import { Phone, Mail, Clock, Shield, Facebook, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Residential Locksmith", href: "#services" },
    { label: "Commercial Locksmith", href: "#services" },
    { label: "Automotive Locksmith", href: "#services" },
    { label: "Emergency Lockouts", href: "#services" },
    { label: "Lock Repairs", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#why-us" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Service Areas", href: "#areas" },
    { label: "Contact", href: "#quote" },
  ],
  areas: [
    "Melbourne CBD",
    "South Yarra",
    "St Kilda",
    "Richmond",
    "Carlton",
    "Fitzroy",
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight text-foreground">Melbourne</p>
                <p className="text-xs text-muted-foreground -mt-0.5">Locksmiths</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Melbourne&apos;s trusted 24/7 emergency locksmith service. Licensed, insured, and ready to help.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:1300000000"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">1300 000 000</span>
              </a>
              <a
                href="mailto:info@melbournelocksmiths.com.au"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@melbournelocksmiths.com.au</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm">Open 24/7, 365 days</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Service Areas</h3>
            <ul className="space-y-3">
              {footerLinks.areas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-muted-foreground">{area}</span>
                </li>
              ))}
              <li>
                <Link
                  href="#areas"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Melbourne Locksmiths. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
