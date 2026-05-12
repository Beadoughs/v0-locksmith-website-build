import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { site } from "@/lib/site"

const services = [
  { label: "Locksmith Services", href: "#services" },
  { label: "Security Doors", href: "#services" },
  { label: "Automotive Locksmith", href: "#services" },
  { label: "Commercial & Strata", href: "#services" },
  { label: "CCTV & Alarms", href: "#services" },
  { label: "Safes", href: "#services" },
]

const company = [
  { label: "About Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
]

const areas = [
  "Launceston CBD",
  "South Launceston",
  "Kings Meadows",
  "Newstead",
  "Riverside",
  "Mowbray",
]

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label={site.name}>
              <BrandLogo />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              {site.description}
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`tel:${site.phoneTel}`}
                className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold">{site.phone}</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="text-sm">{site.email}</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed">
                  {site.address.line1}
                  <br />
                  {site.address.suburb} {site.address.state} {site.address.postcode}
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-4 w-4" />
                </span>
                <span className="text-sm">{site.hours}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Service Areas
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2.5 gap-x-4">
              {areas.map((a) => (
                <li key={a} className="text-sm text-muted-foreground">{a}</li>
              ))}
              <li>
                <Link
                  href="#areas"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View all →
                </Link>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-border bg-background p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Established
              </p>
              <p className="mt-1 text-lg font-bold text-foreground">{site.established}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Servicing {site.region} for over {new Date().getFullYear() - site.established} years
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {[
              { href: site.social.facebook, label: "Facebook", icon: Facebook },
              { href: site.social.instagram, label: "Instagram", icon: Instagram },
              { href: site.social.linkedin, label: "LinkedIn", icon: Linkedin },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="h-9 w-9 rounded-lg bg-background border border-border inline-flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
