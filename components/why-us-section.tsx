"use client"

import { Clock, DollarSign, MapPin, Truck, Shield, Users, Check } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Clock,
    title: "15-Minute Response",
    description: "Our mobile technicians are strategically located across Melbourne for rapid response times.",
    stat: "15 min",
    statLabel: "Avg Response",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No hidden fees or surprises. We provide clear quotes before starting any work.",
    stat: "100%",
    statLabel: "Transparent",
  },
  {
    icon: MapPin,
    title: "Local Technicians",
    description: "Melbourne-based professionals who know the area and can reach you quickly.",
    stat: "50+",
    statLabel: "Service Areas",
  },
  {
    icon: Truck,
    title: "Fully Equipped Vans",
    description: "Our mobile workshops carry all the tools and parts needed to solve your lock issues on-site.",
    stat: "24/7",
    statLabel: "Available",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed locksmiths with comprehensive insurance for your peace of mind.",
    stat: "100%",
    statLabel: "Licensed",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We don&apos;t leave until you&apos;re completely happy.",
    stat: "300+",
    statLabel: "5-Star Reviews",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Melbourne&apos;s Most Trusted Locksmiths
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            We&apos;ve built our reputation on fast response, fair pricing, and exceptional service.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{feature.stat}</p>
                  <p className="text-xs text-muted-foreground">{feature.statLabel}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-card border border-border"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Same-day service available",
              "All work guaranteed",
              "No call-out fees",
              "Police checked technicians",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
