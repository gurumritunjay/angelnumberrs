import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function AngelNumberCard({ entry, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.06, ease: "easeOut" }}
    >
      <Link
        to={`/angel-numbers/${entry.number}`}
        className="glass glass-hover group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6"
      >
        <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gold/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

        <div className="flex items-start justify-between">
          <span className="font-numeral text-4xl font-semibold text-gradient-gold">
            {entry.number}
          </span>
          <ArrowUpRight className="h-4 w-4 text-ethereal/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ethereal/60">
          {entry.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {entry.category.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] tracking-wide text-ethereal/55"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}
