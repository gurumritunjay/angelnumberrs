import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "918197819892"
  const message = "Hello! I'd like to connect regarding numerology services."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 clay-button-whatsapp px-5 py-3 text-white font-semibold shadow-2xl group"
      aria-label="Connect on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 animate-pulse-soft" strokeWidth={2} fill="currentColor" />
      <span className="hidden sm:inline">Connect me on WhatsApp</span>
      
      {/* Floating badge for mobile */}
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-ping sm:hidden" />
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 sm:hidden" />
    </motion.a>
  )
}
