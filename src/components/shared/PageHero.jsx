import { motion } from "framer-motion"
import { StarField } from "@/components/shared/StarField"

export function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40">
      <StarField density={50} />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {eyebrow && (
            <p className="text-xs tracking-[0.25em] text-gold/80 uppercase">{eyebrow}</p>
          )}
          <h1 className="mt-3 text-balance font-display text-4xl text-ethereal sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-ethereal/60 sm:text-base">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
