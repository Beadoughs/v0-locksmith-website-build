"use client"

import { PhoneCall, ClipboardCheck, Truck, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    title: "Get in touch",
    description:
      "Call us or send an enquiry. We'll listen, ask the right questions and give honest advice.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Free quote & plan",
    description:
      "Site visit if needed, then a clear written quote with options — no surprises, no pressure.",
  },
  {
    icon: Truck,
    number: "03",
    title: "On-site service",
    description:
      "Our mobile workshop arrives equipped with parts, tools and the team to get the job done.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Done right",
    description:
      "We test everything, walk you through it and back our workmanship with a real guarantee.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-rhythm bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border border-foreground bg-secondary/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
          >
            How it works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 text-balance text-foreground"
          >
            Simple, transparent process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-sm text-muted-foreground"
          >
            From the first phone call to the final walk-through — here&apos;s how we work with you.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connector line on desktop */}
          <div
            className="absolute left-[10%] right-[10%] top-12 hidden h-px border-t border-dashed border-foreground/40 lg:block"
            aria-hidden="true"
          />

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="relative"
              >
                <div className="flex flex-col items-start">
                  <div className="relative">
                    <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-secondary/40">
                      <step.icon className="h-8 w-8 text-foreground" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
