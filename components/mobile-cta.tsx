"use client"

import { Phone, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { site } from "@/lib/site"

export function MobileCTA() {
  return (
    <>
      {/* Sticky mobile bottom bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-background/95 backdrop-blur-xl border-t border-border p-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.12)]"
      >
        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneTel}`}
            className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md shadow-primary/20 active:scale-[0.98] transition-transform"
          >
            <Phone className="h-4 w-4" />
            Call {site.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-secondary text-foreground border border-border active:scale-[0.95] transition-transform"
            aria-label="Send enquiry"
          >
            <MessageSquare className="h-5 w-5" />
          </a>
        </div>
      </motion.div>

      {/* Floating call button — desktop */}
      <motion.a
        href={`tel:${site.phoneTel}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center gap-2 px-5 py-3 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold rounded-full shadow-xl shadow-primary/30 transition-colors"
      >
        <Phone className="h-4 w-4" />
        Call {site.phone}
      </motion.a>
    </>
  )
}
