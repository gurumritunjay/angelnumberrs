import { motion } from "framer-motion"

export function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[15%] w-40 h-40 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[20%] w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-15 blur-2xl"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {eyebrow && (
            <div className="inline-flex clay px-4 py-2 mb-4">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{eyebrow}</p>
            </div>
          )}
          <h1 className="mt-3 text-balance font-display text-4xl sm:text-5xl text-blue-600 font-bold">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base sm:text-lg leading-relaxed text-gray-600">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
