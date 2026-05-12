"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "Harcourts", className: "font-serif italic tracking-wide text-2xl" },
  { name: "Ray White", className: "font-black uppercase tracking-[0.08em] text-lg" },
  { name: "Housing Tasmania", className: "font-semibold tracking-wide text-xl" },
  { name: "Tasmanian Government", className: "font-bold uppercase text-base tracking-[0.12em]" },
  { name: "First National", className: "font-serif font-semibold text-xl" },
  { name: "LJ Hooker", className: "font-extrabold uppercase text-lg tracking-[0.06em]" },
  { name: "Roberts Real Estate", className: "font-medium italic text-lg" },
  { name: "Hodgman Property Developers", className: "font-bold text-base tracking-wide" },
  { name: "Strata Tasmania", className: "font-black text-lg" },
  { name: "Northern Tasmania Council", className: "font-semibold uppercase text-sm tracking-[0.08em]" },
]

const looped = [...logos, ...logos]

export function LogosMarquee() {
  return (
    <section className="bg-slab text-slab-foreground border-y-[3px] border-primary">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slab-foreground/70">Working with</p>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-balance">
            Trusted by Tasmania&apos;s leading agencies &amp; organisations
          </h2>
        </motion.div>

        <div className="mt-10 overflow-hidden border-y-2 border-slab-foreground/20 py-5">
          {/* TODO: replace with real partner logos */}
          <div className="flex min-w-max items-center gap-4 animate-marquee">
            {looped.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="rounded-xl border-2 border-slab-foreground/30 bg-slab-foreground/5 px-6 py-3 text-slab-foreground"
              >
                <span className={logo.className}>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
