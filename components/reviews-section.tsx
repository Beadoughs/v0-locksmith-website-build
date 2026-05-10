"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const reviews = [
  {
    name: "Sarah M.",
    suburb: "South Yarra",
    rating: 5,
    text: "Locked myself out at 11pm and they arrived within 20 minutes. Absolute lifesavers. Professional, quick, and reasonably priced.",
  },
  {
    name: "James W.",
    suburb: "Carlton",
    rating: 5,
    text: "Had all my locks changed after a break-in. The team was understanding, efficient, and helped me feel safe again. Highly recommend.",
  },
  {
    name: "Michelle T.",
    suburb: "St Kilda",
    rating: 5,
    text: "Lost my car keys on a Sunday morning. They cut and programmed a new transponder key right in my driveway. Amazing service!",
  },
  {
    name: "David K.",
    suburb: "Richmond",
    rating: 5,
    text: "Best commercial locksmith in Melbourne. They installed a master key system for our office building perfectly. Very professional.",
  },
  {
    name: "Emma L.",
    suburb: "Fitzroy",
    rating: 5,
    text: "Fast, friendly, and fair pricing. Fixed my jammed lock in minutes. Will definitely call them again if needed.",
  },
  {
    name: "Robert C.",
    suburb: "Brunswick",
    rating: 5,
    text: "Called at 2am for an emergency lockout. They were there in 15 minutes and got me inside safely. Can&apos;t thank them enough!",
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

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Customer Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Over 300 five-star reviews from satisfied customers across Melbourne.
          </motion.p>

          {/* Overall Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
          >
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground">4.9</p>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Based on 300+ reviews</p>
              <p className="text-xs text-muted-foreground">Google Reviews</p>
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-card border-border hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  
                  <p className="text-foreground mb-6 leading-relaxed">
                    &quot;{review.text}&quot;
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.suburb}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
