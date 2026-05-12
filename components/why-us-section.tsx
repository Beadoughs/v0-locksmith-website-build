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
    description:
      "Three generations supporting homes, businesses and strata clients across Northern Tasmania.",
    stat: `${new Date().getFullYear() - site.established}+`,
    statLabel: "Years",
  },
  {
    icon: ShieldCheck,
    title: "Master Locksmiths",
    description:
      "Fully licensed master locksmiths and security specialists working to Australian standards.",
    stat: "Lic.",
    statLabel: "Certified",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description:
      "Emergency call-outs day and night, with rapid same-day response for urgent jobs.",
    stat: "24/7",
    statLabel: "Response",
  },
  {
    icon: Wrench,
    title: "Total security provider",
    description:
      "Locksmithing, doors, alarms, CCTV and safes — one supplier, one warranty, one point of contact.",
    stat: "1",
    statLabel: "Team",
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

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative border-t-[3px] border-accent bg-primary py-20 md:py-24 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Why Premier
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-balance text-primary-foreground"
          >
            Northern Tasmania&apos;s total security provider
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-primary-foreground/85"
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
          className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="px-2"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-foreground/40 bg-primary-foreground/10">
                <f.icon className="h-5 w-5" />
              </div>
              <p className="text-5xl font-black leading-none text-white">{f.stat}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary-foreground/70">{f.statLabel}</p>
              <h3 className="mt-3 text-xl font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
