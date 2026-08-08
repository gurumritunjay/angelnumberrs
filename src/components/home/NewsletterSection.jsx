import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-14"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[30rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[100px]" />

        <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
          <Mail className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <h2 className="relative mx-auto mt-5 max-w-md font-display text-3xl text-ethereal sm:text-4xl">
          Your daily angel number, delivered
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-sm leading-relaxed text-ethereal/60">
          One email a week. Angel number of the day, a horoscope highlight, and
          nothing you'll want to unsubscribe from.
        </p>

        {submitted ? (
          <div className="relative mx-auto mt-8 flex max-w-md items-center justify-center gap-2 text-sm text-gold">
            <Check className="h-4 w-4" />
            You're on the list -- welcome.
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              required
              placeholder="you@example.com"
              className="h-11 border-white/10 bg-white/5 text-ethereal placeholder:text-ethereal/40 focus-visible:ring-gold/50"
            />
            <Button
              type="submit"
              size="lg"
              className="shrink-0 bg-gold text-primary-foreground hover:bg-gold-light glow-gold"
            >
              Subscribe
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
