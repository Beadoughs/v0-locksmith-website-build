"use client"

import {
  KeyRound,
  Building2,
  Car,
  DoorClosed,
  Camera,
  Bell,
  Lock,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase"
          >
            What we do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance"
          >
            One trusted team, total security
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            From a jammed lock at midnight to a full commercial fit-out — Premier delivers locksmithing,
            doors and electronic security under one roof.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="group relative flex flex-col rounded-2xl bg-card border border-border p-6 md:p-7 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="mb-5 h-36 w-full overflow-hidden rounded-xl border border-border/60">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div
                className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                  service.accent === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}
              >
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        service.accent === "primary" ? "bg-primary" : "bg-accent"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-border">
                <Button
                  asChild
                  variant="ghost"
                  className="h-auto p-0 text-sm font-semibold text-foreground hover:text-primary hover:bg-transparent"
                >
                  <Link href="#contact" className="inline-flex items-center gap-1.5">
                    Enquire about this service
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground">
          <Bell className="w-4 h-4 text-primary" />
          Not sure what you need? Call us and we&apos;ll guide you through the right option.
          <Button asChild variant="link" className="text-primary p-0 h-auto">
            <Link href="#contact">Get advice →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
