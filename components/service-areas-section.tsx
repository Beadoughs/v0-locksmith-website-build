"use client"

import { MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const suburbs = [
  "Melbourne CBD",
  "South Yarra",
  "St Kilda",
  "Richmond",
  "Carlton",
  "Fitzroy",
  "Brunswick",
  "Collingwood",
  "Prahran",
  "Toorak",
  "Brighton",
  "Hawthorn",
  "Malvern",
  "Camberwell",
  "Box Hill",
  "Doncaster",
  "Glen Waverley",
  "Moorabbin",
  "Dandenong",
  "Footscray",
  "Williamstown",
  "Essendon",
  "Preston",
  "Northcote",
  "Coburg",
  "Kew",
  "Balwyn",
  "Caulfield",
  "Bentleigh",
  "Clayton",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
}

export function ServiceAreasSection() {
  return (
    <section id="areas" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Service Areas
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              Servicing All of Melbourne
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground mb-8"
            >
              Our mobile locksmiths cover the greater Melbourne area, including all inner suburbs and surrounding regions. Wherever you are, we&apos;ll be there fast.
            </motion.p>

            {/* Suburbs Tags */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {suburbs.map((suburb) => (
                <motion.div key={suburb} variants={itemVariants}>
                  <Badge
                    variant="secondary"
                    className="px-3 py-1.5 text-sm bg-secondary hover:bg-secondary/80 text-foreground cursor-default"
                  >
                    {suburb}
                  </Badge>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Badge
                  variant="outline"
                  className="px-3 py-1.5 text-sm border-primary/50 text-primary cursor-default"
                >
                  + Many more areas
                </Badge>
              </motion.div>
            </motion.div>
          </div>

          {/* Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative map-like visual */}
              <div className="absolute inset-0 rounded-2xl bg-secondary border border-border overflow-hidden">
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute h-px bg-muted-foreground w-full"
                      style={{ top: `${(i + 1) * 10}%` }}
                    />
                  ))}
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute w-px bg-muted-foreground h-full"
                      style={{ left: `${(i + 1) * 10}%` }}
                    />
                  ))}
                </div>

                {/* Center point (Melbourne CBD) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/30 animate-ping" />
                  </div>
                </div>

                {/* Coverage circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border-2 border-dashed border-primary/30" />

                {/* Scatter points representing service areas */}
                {[
                  { top: "25%", left: "30%" },
                  { top: "35%", left: "60%" },
                  { top: "45%", left: "25%" },
                  { top: "55%", left: "70%" },
                  { top: "65%", left: "40%" },
                  { top: "30%", left: "45%" },
                  { top: "70%", left: "55%" },
                  { top: "40%", left: "35%" },
                ].map((pos, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary/60"
                    style={{ top: pos.top, left: pos.left }}
                  />
                ))}
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-xl p-4 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Greater Melbourne</p>
                  <p className="text-xs text-muted-foreground">50+ suburbs covered</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
