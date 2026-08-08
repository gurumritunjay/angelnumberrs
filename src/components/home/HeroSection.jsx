import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Sparkles, ArrowRight, Moon } from "lucide-react"
import { StarField } from "@/components/shared/StarField"
import { SearchBar } from "@/components/shared/SearchBar"
import { Button } from "@/components/ui/button"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden pt-24 pb-16">
      <StarField density={110} />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.span
            variants={item}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wide text-gold/90"
          >
            <Moon className="h-3.5 w-3.5 animate-float" strokeWidth={1.5} />
            Angel Numbers &middot; Numerology &middot; Astrology
          </motion.span>

          <motion.h1
            variants={item}
            className="text-balance font-display text-5xl leading-[1.08] text-ethereal sm:text-6xl md:text-7xl"
          >
            The universe is <span className="text-gradient-gold">speaking</span>.
            <br />
            Learn to read the signs.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ethereal/60 sm:text-lg"
          >
            Decode the angel numbers following you, calculate your life path,
            and check today's horoscope &mdash; all in one place built for the
            curious and the committed alike.
          </motion.p>

          <motion.div variants={item} className="mt-10 w-full max-w-lg">
            <SearchBar />
          </motion.div>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold text-primary-foreground hover:bg-gold-light glow-gold"
            >
              <Link to="/angel-numbers">
                Discover Your Angel Number
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/15 bg-white/[0.02] text-ethereal/80 hover:bg-white/5 hover:text-gold"
            >
              <Link to="/numerology">
                <Sparkles className="h-4 w-4" />
                Try Numerology Tools
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-midnight to-transparent" />
    </section>
  )
}
