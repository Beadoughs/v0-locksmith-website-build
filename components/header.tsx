"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BrandLogo } from "@/components/brand-logo"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#areas", label: "Service Areas" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background transition-all duration-300",
        scrolled ? "border-b-2 border-primary shadow-lg shadow-black/10" : "border-b-2 border-border"
      )}
    >
      <div className="h-[3px] w-full bg-primary" />
      {/* Top utility strip */}
      <div className="hidden lg:block border-b-2 border-border/70 bg-secondary/70">
        <div className="container mx-auto px-4">
          <div className="flex h-9 items-center justify-between text-xs text-muted-foreground">
            <p>
              Servicing <span className="font-medium text-foreground">Northern Tasmania</span> since {site.established}
              <span className="mx-2 text-border">·</span>
              Licensed Master Locksmiths
            </p>
            <div className="flex items-center gap-4">
              <a href={`mailto:${site.email}`} className="hover:text-primary transition-colors">
                {site.email}
              </a>
              <span className="text-border">·</span>
              <span>{site.hours}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex items-center">
            <Link href="/" aria-label={site.name}>
              <BrandLogo />
            </Link>
            <span className="ml-4 hidden h-10 w-px bg-border md:block" aria-hidden="true" />
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden md:inline-flex border-border hover:border-primary hover:text-primary"
            >
              <Link href="#contact">Get a Quote</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="h-11 md:h-12 px-4 md:px-5 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/30"
            >
              <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">Call {site.phone}</span>
              </a>
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -mr-2 rounded-lg text-foreground hover:bg-secondary"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-primary hover:bg-primary/90">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
