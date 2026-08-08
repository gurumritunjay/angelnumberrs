import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function ZodiacCard({ sign, index = 0, selected = false, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect?.(sign.key)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 12) * 0.05, ease: "easeOut" }}
      className={cn(
        "glass glass-hover group flex flex-col items-center gap-2 rounded-2xl px-4 py-6 text-center transition-colors",
        selected && "border-gold/50 bg-gold/[0.06]"
      )}
    >
      <span
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full border text-2xl transition-colors",
          selected
            ? "border-gold/60 bg-gold/15 text-gold"
            : "border-white/10 bg-white/[0.03] text-ethereal/70 group-hover:border-gold/40 group-hover:text-gold"
        )}
      >
        {sign.symbol}
      </span>
      <span className="font-display text-base text-ethereal">{sign.name}</span>
      <span className="text-xs text-ethereal/45">{sign.dateRange}</span>
    </motion.button>
  )
}
