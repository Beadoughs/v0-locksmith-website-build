"use client"

import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const reviews = [
  {
    name: "Sarah W.",
    suburb: "Kings Meadows",
    rating: 5,
    text: "Locked out of the house with two kids in the rain. Premier had someone out within 25 minutes and re-keyed our front lock on the spot. Brilliant service.",
  },
  {
    name: "Daniel R.",
    suburb: "Newstead",
    rating: 5,
    text: "Had the team install security doors and a screen door for our renovation. Beautiful workmanship and the colour-match against our trim was spot on.",
  },
  {
    name: "Linda T.",
    suburb: "Riverside",
    rating: 5,
    text: "Used Premier for our commercial premises — master key system, restricted keys and CCTV. Professional from quote to install. Highly recommend.",
  },
  {
    name: "Mark P.",
    suburb: "Launceston CBD",
    rating: 5,
    text: "Lost the only key to my late father's safe. They opened it without damage and re-keyed it the same day. Couldn't be happier.",
  },
  {
    name: "Emma K.",
    suburb: "Mowbray",
    rating: 5,
    text: "Quick to come out for a car lockout on a Sunday. Friendly tech, fair price, no fuss. Saved my afternoon.",
  },
  {
    name: "James H.",
    suburb: "Prospect",
    rating: 5,
    text: "Our strata committee uses Premier for everything from key cutting to alarm servicing. Reliable people who actually return your calls.",
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

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase"
          >
            Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance"
          >
            Trusted by locals across Northern Tasmania
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8 inline-flex items-center gap-5 rounded-2xl border border-border bg-card p-4 md:p-5 shadow-sm"
          >
            <div className="text-center">
              <p className="text-4xl font-extrabold text-foreground tabular-nums">4.9</p>
              <div className="mt-1 flex gap-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Five-star reviews</p>
              <p className="text-xs text-muted-foreground">From local Tasmanian customers</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {reviews.map((r) => (
            <motion.figure
              key={r.name}
              variants={item}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 md:p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <Quote className="w-8 h-8 text-primary/20" aria-hidden="true" />
              <blockquote className="mt-3 text-foreground leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between pt-5 border-t border-border">
                <div>
                  <p className="font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.suburb}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
