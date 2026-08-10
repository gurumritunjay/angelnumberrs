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
        className="clay clay-hover group relative flex h-full flex-col justify-between overflow-hidden bg-white p-6"
      >
        <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-200 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

        <div className="flex items-start justify-between">
          <span className="font-display text-4xl font-bold text-gradient-blue">
            {entry.number}
          </span>
          <ArrowUpRight className="h-4 w-4 text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
        </div>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {entry.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {entry.category.map((tag) => (
            <span
              key={tag}
              className="clay-inset rounded-full px-3 py-1 text-xs font-semibold text-blue-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}
