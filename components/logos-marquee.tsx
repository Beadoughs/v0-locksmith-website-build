"use client"

import { motion } from "framer-motion"

// TODO: replace with real partner logo files from public/partners/ once supplied.
const logos = [
  { name: "Harcourts" },
  { name: "Ray White" },
  { name: "Housing Tasmania" },
  { name: "Tasmanian Government" },
  { name: "First National" },
  { name: "LJ Hooker" },
  { name: "Roberts Real Estate" },
  { name: "Hodgman Property Developers" },
  { name: "Strata Tasmania" },
  { name: "Northern Tasmania Council" },
]

const looped = [...logos, ...logos]

export function LogosMarquee() {
  return (
    <section className="border-y border-foreground bg-background">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Working with</p>
          <h2 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
            Trusted by Tasmania&apos;s leading agencies &amp; organisations
          </h2>
        </motion.div>

        <div className="mt-6 overflow-hidden py-2">
          <div className="flex min-w-max items-center gap-4 animate-marquee">
            {looped.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex h-12 w-44 items-center justify-center rounded-lg border border-foreground px-4"
              >
                <span className="text-center text-sm font-medium text-neutral-700">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
