"use client"

import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/lib/site"

export function CTASection() {
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div
        className="absolute inset-0 -z-10 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <div className="absolute -top-32 -right-32 -z-10 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 -z-10 h-[360px] w-[360px] rounded-full bg-accent/30 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-stretch">
          {/* Left: pitch + contact */}
          <div className="lg:col-span-2 text-primary-foreground">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold tracking-wider uppercase"
            >
              Get in touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance"
            >
              Talk to a master locksmith today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-primary-foreground/85 max-w-md"
            >
              Whether it&apos;s an emergency lockout or a full security upgrade — call us, and we&apos;ll get
              you sorted today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-8 space-y-3"
            >
              <a
                href={`tel:${site.phoneTel}`}
                className="group flex items-center gap-4 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors p-4 backdrop-blur"
              >
                <div className="h-12 w-12 rounded-xl bg-white text-primary inline-flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/70">
                    Call us 24/7
                  </p>
                  <p className="text-xl font-bold">{site.phone}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary-foreground/70 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={`tel:${site.phoneLocalTel}`}
                className="flex items-center gap-3 rounded-xl px-2 py-1 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                Local: {site.phoneLocal}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 rounded-xl px-2 py-1 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
              <div className="flex items-center gap-3 rounded-xl px-2 py-1 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                {site.address.line1}, {site.address.suburb} {site.address.state} {site.address.postcode}
              </div>
              <div className="flex items-center gap-3 rounded-xl px-2 py-1 text-sm text-primary-foreground/80">
                <Clock className="h-4 w-4" />
                {site.hours}
              </div>
            </motion.div>
          </div>

          {/* Right: form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-card border border-border/0 p-6 md:p-8 shadow-2xl shadow-black/10">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">Request a fast quote</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us what you need — we&apos;ll get back to you the same business day.
                </p>
              </div>

              <form
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" placeholder="John Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="04xx xxx xxx" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="suburb">Suburb</Label>
                  <Input id="suburb" placeholder="Launceston" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service needed</Label>
                  <select
                    id="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Emergency lockout</option>
                    <option>Locksmith / lock change</option>
                    <option>Security or screen door</option>
                    <option>Automotive (car keys)</option>
                    <option>CCTV or alarms</option>
                    <option>Safe</option>
                    <option>Commercial / strata</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" rows={4} placeholder="A few quick details about what you need…" />
                </div>

                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-base h-12 px-7 shadow-lg shadow-primary/20"
                  >
                    Send enquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    asChild
                    type="button"
                    variant="outline"
                    size="lg"
                    className="h-12 px-7"
                  >
                    <Link href={`tel:${site.phoneTel}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Or call us now
                    </Link>
                  </Button>
                </div>

                <p className="sm:col-span-2 text-xs text-muted-foreground">
                  By submitting you agree to be contacted about your enquiry. We never share your details.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
