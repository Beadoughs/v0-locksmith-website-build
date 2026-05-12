"use client"

import {
  Clock,
  ShieldCheck,
  Wrench,
  Truck,
  Award,
  Users,
  Check,
} from "lucide-react"
import { motion } from "framer-motion"
import { site } from "@/lib/site"

const features = [
  {
    icon: Award,
    title: `Trusted since ${site.established}`,
    description:
      "Three generations serving Northern Tasmania — homes, businesses, strata and trade customers.",
    stat: `${new Date().getFullYear() - site.established}+`,
    statLabel: "Years experience",
  },
  {
    icon: ShieldCheck,
    title: "Master Locksmiths",
    description:
      "Fully licensed master locksmiths and security specialists working to Australian standards.",
    stat: "Lic.",
    statLabel: "Licensed & insured",
  },
  {
    icon: Clock,
    title: "Same-day & 24/7",
    description:
      "Emergency call-outs day or night. Same-day appointments for non-urgent work where possible.",
    stat: "24/7",
    statLabel: "Emergency callout",
  },
  {
    icon: Truck,
    title: "Mobile workshops",
    description:
      "Fully equipped vans cover Launceston, Kings Meadows and surrounding Northern Tasmania.",
    stat: "Mobile",
    statLabel: "On-site service",
  },
  {
    icon: Wrench,
    title: "Total security provider",
    description:
      "Locksmithing, doors, alarms, CCTV and safes — one supplier, one warranty, one point of contact.",
    stat: "1",
    statLabel: "Trusted partner",
  },
  {
    icon: Users,
    title: "Customers first",
    description:
      "Honest advice, clear pricing and no upsell. We finish the job properly the first time.",
    stat: "★★★★★",
    statLabel: "Local reputation",
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

const guarantees = [
  "Workmanship guaranteed",
  "Upfront pricing",
  "Australian-made products",
  "Police-checked technicians",
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-20 md:py-28 bg-secondary/50 border-y border-border/60">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase"
          >
            Why Premier
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance"
          >
            Northern Tasmania&apos;s total security provider
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Built on five decades of service, we&apos;ve grown to cover every aspect of your home and
            business security — with the same family standards.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group relative rounded-2xl border border-border bg-card p-6 md:p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary inline-flex items-center justify-center">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="text-right">
                  <p className="text-lg font-extrabold text-primary tabular-nums">{f.stat}</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {f.statLabel}
                  </p>
                </div>
              </div>
              <h3 className="text-base font-bold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {guarantees.map((g) => (
              <div key={g} className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-foreground">{g}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
