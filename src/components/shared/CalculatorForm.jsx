import { motion } from "framer-motion"

/**
 * Shared glass-panel shell for numerology (and future) calculators.
 * Handles the presentational chrome; callers supply the form + result UI.
 */
export function CalculatorForm({ icon: Icon, title, description, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`glass relative overflow-hidden rounded-3xl p-6 sm:p-8 ${className}`}
    >
      <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-mystic-purple/15 blur-[80px]" />
      <div className="relative flex items-center gap-3">
        {Icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
            <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
          </span>
        )}
        <div>
          <h3 className="font-display text-xl text-ethereal">{title}</h3>
          {description && <p className="text-sm text-ethereal/55">{description}</p>}
        </div>
      </div>

      <div className="relative mt-6">{children}</div>
    </motion.div>
  )
}
