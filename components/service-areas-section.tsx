"use client"

import { MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const suburbs = [
  "Launceston CBD",
  "South Launceston",
  "Kings Meadows",
  "Newstead",
  "Riverside",
  "Trevallyn",
  "Mowbray",
  "Prospect",
  "Norwood",
  "Youngtown",
  "Summerhill",
  "Sandhill",
  "Invermay",
  "Mayfield",
  "Ravenswood",
  "Rocherlea",
  "Waverley",
  "Legana",
  "Beauty Point",
  "Beaconsfield",
  "Deloraine",
  "Westbury",
  "Longford",
  "Evandale",
  "Perth",
  "George Town",
  "Scottsdale",
  "St Helens",
  "Bridport",
  "Northern Tasmania",
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.02 } },
}
const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
}

const pins = [
  { top: "30%", left: "44%", label: "Launceston" },
  { top: "44%", left: "48%", label: "Kings Meadows" },
  { top: "26%", left: "32%", label: "Riverside" },
  { top: "20%", left: "56%", label: "George Town" },
  { top: "55%", left: "30%", label: "Westbury" },
  { top: "60%", left: "60%", label: "Scottsdale" },
  { top: "70%", left: "48%", label: "Longford" },
  { top: "80%", left: "70%", label: "St Helens" },
]

export function ServiceAreasSection() {
  return (
    <section id="areas" className="relative py-20 md:py-28 bg-secondary/40 border-y border-border/60">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase"
            >
              Service Areas
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance"
            >
              Covering all of Northern Tasmania
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Based in South Launceston, our mobile teams cover greater Launceston and the surrounding
              Northern Tasmania region — from the Tamar Valley to the East Coast.
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {suburbs.map((s) => (
                <motion.div key={s} variants={item}>
                  <Badge
                    variant="secondary"
                    className="rounded-full px-3 py-1.5 text-sm font-medium bg-background hover:bg-primary/10 hover:text-primary border border-border cursor-default transition-colors"
                  >
                    {s}
                  </Badge>
                </motion.div>
              ))}
              <motion.div variants={item}>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1.5 text-sm border-primary/50 text-primary cursor-default"
                >
                  + Surrounding regions
                </Badge>
              </motion.div>
            </motion.div>
          </div>

          {/* Stylized map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-card border border-border overflow-hidden shadow-sm">
                <div className="absolute inset-0 opacity-50">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute h-px bg-border w-full"
                      style={{ top: `${(i + 1) * 10}%` }}
                    />
                  ))}
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute w-px bg-border h-full"
                      style={{ left: `${(i + 1) * 10}%` }}
                    />
                  ))}
                </div>

                {/* Tasmania abstract shape */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full text-primary/10"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 30 Q35 22 52 24 Q70 26 78 36 Q82 50 76 64 Q66 78 50 80 Q32 78 22 66 Q14 52 18 40 Q20 34 22 30 Z" />
                </svg>

                {/* HQ pulse */}
                <div className="absolute" style={{ top: "44%", left: "48%" }}>
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    <div className="h-3.5 w-3.5 rounded-full bg-primary" />
                    <div className="absolute inset-0 h-3.5 w-3.5 rounded-full bg-primary/40 animate-ping" />
                  </div>
                </div>

                {/* Coverage ring */}
                <div
                  className="absolute h-3/5 w-3/5 rounded-full border-2 border-dashed border-primary/40"
                  style={{ top: "44%", left: "48%", transform: "translate(-50%, -50%)" }}
                />

                {/* Service area pins */}
                {pins.map((p) => (
                  <div
                    key={p.label}
                    className="absolute"
                    style={{ top: p.top, left: p.left }}
                  >
                    <div className="-translate-x-1/2 -translate-y-1/2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                    </div>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-2xl bg-background border border-border px-4 py-3 shadow-xl"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 inline-flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Northern Tasmania</p>
                  <p className="text-xs text-muted-foreground">30+ suburbs covered</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
