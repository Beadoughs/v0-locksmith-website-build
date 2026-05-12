"use client"

import { useState } from "react"
import {
  KeyRound,
  Building2,
  Car,
  DoorClosed,
  Camera,
  Lock,
} from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const services = [
  {
    icon: KeyRound,
    title: "Locksmith Services",
    description:
      "Master locksmiths for lockouts, lock changes, rekeying, restricted keys and high-security upgrades.",
    features: ["Emergency lockouts", "Lock changes & rekeying", "Restricted key systems", "Master key suites"],
    accent: "primary" as const,
    image: "https://www.pwls.com.au/wp-content/uploads/2021/03/Commercial-Locksmith.jpg",
  },
  {
    icon: DoorClosed,
    title: "Security & Screen Doors",
    description:
      "Australian-made security doors and flyscreens — hinged, sliding and cast diamond grilles in 24+ colours.",
    features: ["Security door – hinged", "Security door – sliding", "Decorative cast", "Flyscreen doors"],
    accent: "primary" as const,
    image: "https://www.pwls.com.au/wp-content/uploads/2021/03/security-door-sliding.jpg",
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description:
      "Car lockouts, transponder keys and remote programming for most makes and models — on site.",
    features: ["Car lockouts", "Transponder keys", "Remote programming", "Ignition repair"],
    accent: "accent" as const,
    image: "https://www.pwls.com.au/wp-content/uploads/2021/03/2.4.2.2.high-security-metal-door-2.jpg",
  },
  {
    icon: Building2,
    title: "Commercial & Strata",
    description:
      "Complete business security — access control, restricted keying, exit devices and scheduled maintenance.",
    features: ["Access control", "Exit devices", "Strata buildings", "Service contracts"],
    accent: "accent" as const,
    image: "https://www.pwls.com.au/wp-content/uploads/2021/03/aluminium-french-doors-2.jpg",
  },
  {
    icon: Camera,
    title: "CCTV & Alarms",
    description:
      "Modern surveillance, monitored alarms and intercoms — designed, installed and maintained by us.",
    features: ["IP CCTV systems", "Monitored alarms", "Intercoms", "Remote viewing"],
    accent: "primary" as const,
    image: "https://www.pwls.com.au/wp-content/uploads/2021/03/flyscreen-door-sliding.jpg",
  },
  {
    icon: Lock,
    title: "Safes",
    description:
      "Residential and commercial safes — supply, installation, opening, repair and combination changes.",
    features: ["Home & cash safes", "Installation", "Safe opening", "Combination changes"],
    accent: "accent" as const,
    image: "https://www.pwls.com.au/wp-content/uploads/2021/03/security-door-cast.jpg",
  },
]

export function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="services" className="relative bg-slab py-16 md:py-20 text-slab-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground"
          >
            What we do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-balance text-slab-foreground"
          >
            One trusted team, total security
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                onMouseEnter={() => setExpandedIndex(index)}
                className="cursor-pointer rounded-2xl border-2 border-primary/50 bg-slab px-4 py-4 text-slab-foreground shadow-lg shadow-black/20 transition-colors hover:border-primary"
              >
                <div className="flex items-center gap-3 border-b border-slab-foreground/15 pb-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-bold md:text-base">{service.title}</h3>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-sm text-slab-foreground/80">{service.description}</p>
                      <ul className="mt-3 space-y-1.5">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-slab-foreground/85">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
