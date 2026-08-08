import { motion } from "framer-motion"
import { Eye, Repeat, Compass } from "lucide-react"

const POINTS = [
  {
    icon: Eye,
    title: "Notice the pattern",
    description:
      "Angel numbers are repeating digit sequences -- 111, 444, 1212 -- that seem to follow you across clocks, receipts, and license plates.",
  },
  {
    icon: Repeat,
    title: "Recognize the message",
    description:
      "Each sequence carries its own numerological meaning, shaped by the vibration and symbolism of its digits.",
  },
  {
    icon: Compass,
    title: "Apply the guidance",
    description:
      "Use the message as a mirror for reflection -- a nudge toward the decision, mindset, or change you're already circling.",
  },
]

export function IntroSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-xs tracking-[0.25em] text-gold/80 uppercase">The Basics</p>
        <h2 className="mt-3 font-display text-3xl text-ethereal sm:text-4xl">
          What are Angel Numbers?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ethereal/60 sm:text-base">
          Angel numbers are a spiritual practice rooted in numerology -- the
          belief that repeating numbers carry symbolic messages from your
          higher self, guides, or the universe, drawing attention to a theme
          worth exploring in your life right now.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {POINTS.map((point, i) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
              <point.icon className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <h3 className="mt-4 font-display text-lg text-ethereal">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ethereal/55">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
