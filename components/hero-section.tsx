"use client"

import { Phone, ArrowRight, ShieldCheck, Clock, Award, KeyRound } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

const stats = [
  { value: "50+", label: "Years serving Tasmania" },
  { value: "24/7", label: "Emergency callout" },
  { value: "Licensed", label: "Master Locksmiths" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-foreground bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm"
            >
              <KeyRound className="h-3.5 w-3.5 text-primary" />
              24/7 Emergency Locksmith · Launceston & Northern Tasmania
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="mt-6 text-foreground leading-[1.05] text-balance"
            >
              We keep you, your home and your business{" "}
              <span className="headline-highlight">
                <span className="text-emphasis-red">safe & secure</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16 }}
              className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg lg:mx-0"
            >
              Specialising in locksmithing, security doors, automotive keys, alarms, safes and CCTV across
              Northern Tasmania.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 text-base px-7 h-12"
              >
                <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call {site.phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-foreground px-7 text-base hover:bg-secondary"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 justify-center lg:justify-start text-sm"
            >
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Licensed Master Locksmiths
              </span>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                24/7 same-day response
              </span>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Award className="w-4 h-4 text-primary" />
                Trusted since {site.established}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md rounded-xl border border-foreground bg-card shadow-lg">
              <img
                src="https://www.pwls.com.au/wp-content/uploads/2021/03/Commercial-Locksmith.jpg"
                alt="Premier locksmith technician working on-site"
                className="h-60 w-full rounded-t-xl object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 md:p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Why clients call us</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-border bg-secondary/40 p-2.5">
                      <p className="text-sm font-bold text-foreground">{s.value}</p>
                      <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
