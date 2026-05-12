"use client"

import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const reviews = [
  {
    name: "Sarah W.",
    suburb: "Kings Meadows",
    rating: 5,
    text: "Locked out with kids in the rain and Premier arrived fast. They re-keyed the front door on the spot and made a stressful night easy.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces",
  },
  {
    name: "Daniel R.",
    suburb: "Newstead",
    rating: 5,
    text: "Premier installed our security and screen doors with excellent workmanship. The finish and colour match were spot on.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces",
  },
  {
    name: "Linda T.",
    suburb: "Riverside",
    rating: 5,
    text: "For our commercial site they delivered master keying and CCTV exactly as promised. Professional, clear, and reliable from quote to install.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=faces",
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

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-rhythm bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-4xl text-center md:mb-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase"
          >
            Reviews
          </motion.span>
          <div className="mt-3 flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between">
            <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-balance text-left text-foreground"
            >
              Trusted by locals across Northern Tasmania
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-3 rounded-xl border border-foreground bg-card px-4 py-2.5 shadow-sm"
            >
              <p className="text-xl font-bold text-foreground tabular-nums">4.9</p>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Trusted</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
        >
          {reviews.map((r) => (
            <motion.figure
              key={r.name}
              variants={item}
              className="relative flex flex-col rounded-xl border border-foreground bg-card p-5 transition-all"
            >
              <div className="mb-3 flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="h-11 w-11 rounded-full border border-border object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.suburb}</p>
                </div>
              </div>
              <Quote className="h-6 w-6 text-primary/25" aria-hidden="true" />
              <blockquote className="mt-2 text-sm leading-relaxed text-foreground">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between border-t border-border pt-4">
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
