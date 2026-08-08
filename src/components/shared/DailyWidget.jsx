import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import { angelNumbers } from "@/data/angelNumbers"
import { Button } from "@/components/ui/button"

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date - start
  return Math.floor(diff / 86400000)
}

export function DailyWidget({ className = "" }) {
  const today = new Date()
  const entry = angelNumbers[dayOfYear(today) % angelNumbers.length]
  const formattedDate = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`glass glow-purple relative overflow-hidden rounded-3xl p-8 sm:p-10 ${className}`}
    >
      <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-mystic-purple/25 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-gold/15 blur-[90px]" />

      <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-gold/80 uppercase">
            <Sparkles className="h-3.5 w-3.5 animate-twinkle" />
            Today's Angel Number &middot; {formattedDate}
          </div>
          <p className="mt-4 font-numeral text-6xl font-semibold text-gradient-gold sm:text-7xl">
            {entry.number}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ethereal/65">
            {entry.summary}
          </p>
        </div>

        <Button
          asChild
          size="lg"
          className="shrink-0 bg-gold text-primary-foreground hover:bg-gold-light glow-gold"
        >
          <Link to={`/angel-numbers/${entry.number}`}>
            Explore Full Meaning
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
