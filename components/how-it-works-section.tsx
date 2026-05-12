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
    <section id="how-it-works" className="relative bg-slab py-20 md:py-24 text-slab-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground"
          >
            How it works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-balance text-slab-foreground"
          >
            Simple, transparent process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slab-foreground/75"
          >
            From the first phone call to the final walk-through — here&apos;s how we work with you.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connector line on desktop */}
          <div
            className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[3px] border-t-2 border-dashed border-primary/70"
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="relative"
              >
                <div className="flex flex-col items-start">
                  <div className="relative">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-slab-foreground/20 bg-slab">
                      <step.icon className="h-9 w-9 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground ring-4 ring-slab">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slab-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slab-foreground/75">
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
