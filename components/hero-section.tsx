"use client"

import { Phone, ArrowRight, ShieldCheck, Clock, MapPin, Award } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

const trustBadges = [
  { icon: ShieldCheck, label: "Licensed Master Locksmiths" },
  { icon: Clock, label: "24/7 Emergency Service" },
  { icon: MapPin, label: site.region },
  { icon: Award, label: `Trusted since ${site.established}` },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-6 inline-block rounded-full border border-border bg-background/80 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm md:text-sm">
                24/7 Emergency Locksmith · Launceston & {site.region}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              We keep you, your home and your business{" "}
              <span className="relative inline-block text-primary">
                safe & secure
                <span
                  className="absolute inset-x-0 bottom-0.5 -z-0 h-2.5 rounded-sm bg-primary/15"
                  aria-hidden
                />
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mx-auto mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg lg:mx-0"
            >
              {site.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="h-12 bg-primary px-7 text-base shadow-lg shadow-primary/20 hover:bg-primary/90"
              >
                <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call {site.phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-border px-7 text-base hover:bg-secondary"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                  className="flex flex-col items-center gap-2 rounded-lg bg-secondary/50 p-3 lg:items-start"
                >
                  <badge.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-center text-xs font-medium text-foreground lg:text-left">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg lg:mx-0"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 to-transparent blur-2xl" aria-hidden />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <img
                src="https://www.pwls.com.au/wp-content/uploads/2021/03/Commercial-Locksmith.jpg"
                alt="Premier locksmith on a commercial job in Northern Tasmania"
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.55 }}
              className="absolute -bottom-3 -right-2 hidden max-w-[11rem] rounded-xl border border-border bg-card/95 p-3 text-left shadow-lg backdrop-blur-sm md:block"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                {site.shortName}
              </p>
              <p className="mt-1 text-xs font-medium text-foreground">{site.tagline}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
