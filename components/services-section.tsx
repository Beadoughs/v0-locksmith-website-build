"use client"

import { useState } from "react"
import {
  KeyRound,
  Building2,
  Car,
  DoorClosed,
  Camera,
  Lock,
  ChevronDown,
} from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const services = [
  {
    icon: KeyRound,
    title: "Locksmith Services",
    subtitle: "Lockouts & rekeying",
    description:
      "Master locksmiths for lockouts, lock changes, rekeying, restricted keys and high-security upgrades.",
    features: ["Emergency lockouts", "Lock changes & rekeying", "Restricted key systems", "Master key suites"],
    image: "https://www.pwls.com.au/wp-content/uploads/2021/03/Commercial-Locksmith.jpg",
  },
  {
    icon: DoorClosed,
    title: "Security & Screen Doors",
    subtitle: "Supply & installation",
    description:
      "Australian-made security doors and flyscreens — hinged, sliding and cast diamond grilles in 24+ colours.",
    features: ["Security door – hinged", "Security door – sliding", "Decorative cast", "Flyscreen doors"],
    image: "https://www.pwls.com.au/wp-content/uploads/2021/03/security-door-sliding.jpg",
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    subtitle: "Car keys & lockouts",
    description:
      "Car lockouts, transponder keys and remote programming for most makes and models — on site.",
    features: ["Car lockouts", "Transponder keys", "Remote programming", "Ignition repair"],
    image: null,
  },
  {
    icon: Building2,
    title: "Commercial & Strata",
    subtitle: "Master key systems",
    description:
      "Complete business security — access control, restricted keying, exit devices and scheduled maintenance.",
    features: ["Access control", "Exit devices", "Strata buildings", "Service contracts"],
    image: "https://www.pwls.com.au/wp-content/uploads/2021/03/2.4.2.2.high-security-metal-door-2.jpg",
  },
  {
    icon: Camera,
    title: "CCTV & Alarms",
    subtitle: "Monitoring & installs",
    description:
      "Modern surveillance, monitored alarms and intercoms — designed, installed and maintained by us.",
    features: ["IP CCTV systems", "Monitored alarms", "Intercoms", "Remote viewing"],
    image: null,
  },
  {
    icon: Lock,
    title: "Safes",
    subtitle: "Supply, open & repair",
    description:
      "Residential and commercial safes — supply, installation, opening, repair and combination changes.",
    features: ["Home & cash safes", "Installation", "Safe opening", "Combination changes"],
    image: null,
  },
]

export function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="services" className="section-rhythm bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border border-foreground bg-secondary/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground"
          >
            What we do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 text-balance text-foreground"
          >
            One trusted team, total security
          </motion.h2>
          <p className="mt-2 text-sm text-muted-foreground">From emergency callouts to complete security upgrades.</p>
        </div>

        <div className="grid auto-rows-min items-start grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="cursor-pointer rounded-xl border border-foreground bg-card p-4 transition-colors hover:bg-secondary/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`} />
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
                      <p className="pt-3 text-sm text-muted-foreground">{service.description}</p>
                      <ul className="mt-3 space-y-1.5">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="mt-3 h-28 w-full rounded-xl border border-foreground object-cover"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="mt-3 flex h-28 items-center justify-center rounded-xl border border-foreground bg-secondary/40">
                          <service.icon className="h-10 w-10 text-muted-foreground" />
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">Need something specific? We tailor security plans to your property and budget.</p>
      </div>
    </section>
  )
}
