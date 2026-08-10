import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { angelNumbers } from "@/data/angelNumbers"
import { AngelNumberCard } from "@/components/angel-numbers/AngelNumberCard"

const FEATURED = ["111", "222", "333", "444", "555", "666", "777", "888", "999", "1111"]

export function FeaturedNumbers() {
  const entries = FEATURED.map((n) => angelNumbers.find((a) => a.number === n)).filter(Boolean)

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
      >
        <div>
          <div className="inline-flex clay px-4 py-2 mb-3">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Explore</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-blue-600 font-bold">
            Featured Angel Numbers
          </h2>
        </div>
        <Link
          to="/angel-numbers"
          className="group flex items-center gap-1.5 text-sm text-gray-600 font-semibold transition-colors hover:text-blue-600"
        >
          View full directory
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {entries.map((entry, i) => (
          <AngelNumberCard key={entry.number} entry={entry} index={i} />
        ))}
      </div>
    </section>
  )
}
