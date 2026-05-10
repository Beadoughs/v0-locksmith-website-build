"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"

export function MobileCTA() {
  return (
    <>
      {/* Sticky Mobile Bottom Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4"
      >
        <a
          href="tel:1300000000"
          className="flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now: 1300 000 000
        </a>
      </motion.div>

      {/* Floating Call Button - Desktop */}
      <motion.a
        href="tel:1300000000"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-3 py-3 px-5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-lg transition-colors"
      >
        <Phone className="w-5 h-5" />
        <span>Call Now</span>
      </motion.a>
    </>
  )
}
