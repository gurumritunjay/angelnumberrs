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
        <div className="inline-flex clay px-4 py-2 mb-4">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">The Basics</p>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-blue-600 font-bold">
          What are Angel Numbers?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
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
            className="clay clay-hover p-6 text-center bg-white"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center clay bg-gradient-to-br from-blue-400 to-blue-600">
              <point.icon className="h-6 w-6 text-white" strokeWidth={2} />
            </div>
            <h3 className="mt-4 font-display text-lg text-blue-600 font-bold">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
