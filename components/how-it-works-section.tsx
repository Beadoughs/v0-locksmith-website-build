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
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase"
          >
            How it works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance"
          >
            Simple, transparent process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            From the first phone call to the final walk-through — here&apos;s how we work with you.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connector line on desktop */}
          <div
            className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent"
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
                    <div className="h-24 w-24 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center">
                      <step.icon className="h-9 w-9 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold ring-4 ring-background">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
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
