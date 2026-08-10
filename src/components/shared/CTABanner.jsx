import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTABanner({
  eyebrow = "Premium Guidance",
  title = "Some questions deserve more than a symbol.",
  description = "Book a one-on-one reading with a vetted astrologer or numerologist and get answers specific to your chart, your name, and your path.",
  ctaLabel = "Book a Reading",
  to = "/contact",
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative overflow-hidden clay clay-hover bg-gradient-to-br from-blue-50 via-white to-blue-50 p-10 text-center sm:p-14 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-green-200 rounded-full opacity-20 blur-3xl" />
      </div>
      
      <div className="relative">
        <div className="clay inline-flex p-3 mb-4 bg-gradient-to-br from-blue-400 to-blue-600">
          <Star className="h-6 w-6 text-white" fill="currentColor" strokeWidth={2} />
        </div>
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{eyebrow}</p>
        <h3 className="mx-auto mt-4 max-w-xl font-display text-3xl sm:text-4xl text-blue-600 font-bold">
          {title}
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-600">
          {description}
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 clay-button text-white font-semibold"
        >
          <Link to={to}>
            {ctaLabel}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
