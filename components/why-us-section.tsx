"use client"

import {
  Clock,
  ShieldCheck,
  Wrench,
  Award,
} from "lucide-react"
import { motion } from "framer-motion"
import { site } from "@/lib/site"

const features = [
  {
    icon: Award,
    title: `Trusted since ${site.established}`,
    description: "Three generations supporting Northern Tasmania.",
    stat: `${new Date().getFullYear() - site.established}+`,
    statLabel: "Years",
  },
  {
    icon: ShieldCheck,
    title: "Master Locksmiths",
    description: "Fully licensed specialists working to Australian standards.",
    stat: "Lic.",
    statLabel: "Certified",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Day and night emergency response for urgent jobs.",
    stat: "24/7",
    statLabel: "Response",
  },
  {
    icon: Wrench,
    title: "Total security provider",
    description: "One provider for locks, doors, CCTV, alarms and safes.",
    stat: "1",
    statLabel: "Team",
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function WhyUsSection() {
  return (
    <section id="why-us" className="section-rhythm border-y border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border border-foreground bg-secondary/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Why Premier
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 text-balance text-foreground"
          >
            Northern Tasmania&apos;s total security provider
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-2 text-sm text-muted-foreground">
            Built on decades of local service with one accountable team.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={item}
              className={`py-4 ${i < features.length - 1 ? "border-b border-border md:border-b-0 lg:border-r lg:border-b-0 md:[&:nth-child(odd)]:border-r md:[&:nth-child(-n+2)]:border-b" : ""}`}
            >
              <div className="inline-flex items-center gap-2">
                <f.icon className="h-4 w-4 text-primary" />
                <p className="text-4xl font-bold leading-none text-primary">{f.stat}</p>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.statLabel}</p>
              <h3 className="mt-2 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
