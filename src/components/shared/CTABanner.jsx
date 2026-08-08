import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Moon, ArrowRight } from "lucide-react"
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
      className={`relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-mystic-purple-deep/40 via-midnight to-midnight-deep p-10 text-center sm:p-14 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,theme(colors.gold/12),transparent)]" />
      <Moon className="relative mx-auto h-8 w-8 text-gold animate-float" strokeWidth={1.5} />
      <p className="relative mt-4 text-xs tracking-[0.25em] text-gold/80 uppercase">{eyebrow}</p>
      <h3 className="relative mx-auto mt-3 max-w-xl font-display text-3xl text-ethereal sm:text-4xl">
        {title}
      </h3>
      <p className="relative mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ethereal/60">
        {description}
      </p>
      <Button
        asChild
        size="lg"
        className="relative mt-8 bg-gold text-primary-foreground hover:bg-gold-light glow-gold"
      >
        <Link to={to}>
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  )
}
