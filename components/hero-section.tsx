"use client"

import { Phone, ArrowRight, ShieldCheck, Clock, Award, KeyRound, DoorClosed, Camera } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

const stats = [
  { value: "50+", label: "Years serving Tasmania" },
  { value: "24/7", label: "Emergency callout" },
  { value: "1000s", label: "Locks & doors secured" },
]

const orbitChips = [
  { icon: KeyRound, label: "Lockouts" },
  { icon: DoorClosed, label: "Security Doors" },
  { icon: Camera, label: "CCTV" },
  { icon: ShieldCheck, label: "Alarms" },
]

export function HeroSection() {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Backdrop layers */}
      <div className="absolute inset-0 -z-10 bg-brand-gradient" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 -right-20 -z-10 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              24/7 Emergency Locksmith · Launceston & Northern Tasmania
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight text-balance"
            >
              We keep you, your home and your business{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">safe & secure.</span>
                <span className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-primary/15 rounded-sm" aria-hidden="true" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty"
            >
              Specialising in locksmithing, security doors, automotive keys, alarms, safes, CCTV and access control
              for residential, strata and commercial customers across Northern Tasmania.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
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
                className="text-base px-7 h-12 border-border hover:border-primary hover:text-primary"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 justify-center lg:justify-start text-sm"
            >
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Licensed Master Locksmiths
              </span>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                Same-day response
              </span>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Award className="w-4 h-4 text-primary" />
                Trusted since {site.established}
              </span>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Card stack */}
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-accent/15 blur-2xl" aria-hidden="true" />

              <div className="relative rounded-3xl border border-border bg-card shadow-2xl shadow-black/5 overflow-hidden">
                {/* Header bar */}
                <div className="flex items-center justify-between bg-primary px-6 py-4">
                  <div className="flex items-center gap-2 text-primary-foreground/80 text-xs font-medium uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    Premier Security
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground/30" />
                    <div className="w-2 h-2 rounded-full bg-primary-foreground/30" />
                    <div className="w-2 h-2 rounded-full bg-primary-foreground/60" />
                  </div>
                </div>

                <div
                  className="h-40 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.2)), url('https://www.pwls.com.au/wp-content/uploads/2021/03/Commercial-Locksmith.jpg')",
                  }}
                  aria-hidden="true"
                />

                <div className="p-6 md:p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Average Response
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold text-foreground tabular-nums">30</span>
                    <span className="text-2xl font-semibold text-muted-foreground">min</span>
                  </div>
                  <div className="mt-4 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "78%" }}
                      transition={{ delay: 0.8, duration: 1.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl bg-secondary border border-border/70 p-3"
                      >
                        <p className="text-xl font-bold text-foreground">{s.value}</p>
                        <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                          {s.label}
                        </p>
                      </div>
                    ))}
                    <div className="rounded-xl bg-accent/10 border border-accent/20 p-3">
                      <p className="text-xl font-bold text-accent">A+</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                        Licensed & insured
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating chips around card */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -top-4 -left-6 hidden md:flex items-center gap-2 rounded-full bg-background border border-border px-3 py-1.5 shadow-md text-xs font-medium"
              >
                <KeyRound className="w-3.5 h-3.5 text-primary" />
                Lockouts
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-3 -right-4 hidden md:flex items-center gap-2 rounded-full bg-background border border-border px-3 py-1.5 shadow-md text-xs font-medium"
              >
                <Camera className="w-3.5 h-3.5 text-accent" />
                CCTV Installed
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute top-1/2 -right-8 hidden md:flex items-center gap-2 rounded-full bg-background border border-border px-3 py-1.5 shadow-md text-xs font-medium"
              >
                <DoorClosed className="w-3.5 h-3.5 text-primary" />
                Security Doors
              </motion.div>
            </div>

            {/* Mobile chip row */}
            <div className="mt-6 flex md:hidden flex-wrap justify-center gap-2">
              {orbitChips.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-background border border-border px-3 py-1.5 text-xs font-medium"
                >
                  <c.icon className="w-3.5 h-3.5 text-primary" />
                  {c.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
