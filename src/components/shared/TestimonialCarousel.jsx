import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import { Button } from "@/components/ui/button"

export function TestimonialCarousel({ className = "" }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [])

  const current = testimonials[index]

  function go(delta) {
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length)
  }

  return (
    <div className={`relative mx-auto max-w-2xl text-center ${className}`}>
      <Quote className="mx-auto h-8 w-8 text-gold/40" />

      <div className="relative mt-6 min-h-[9rem] sm:min-h-[7rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <p className="font-display text-xl leading-relaxed text-ethereal/90 sm:text-2xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-5 flex items-center justify-center gap-1.5">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-3 text-sm text-ethereal/50">
              <span className="text-ethereal/80">{current.name}</span> &middot; {current.role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => go(-1)} className="text-ethereal/50 hover:bg-white/5 hover:text-gold">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-gold" : "w-1.5 bg-white/15"
              }`}
            />
          ))}
        </div>
        <Button variant="ghost" size="icon" onClick={() => go(1)} className="text-ethereal/50 hover:bg-white/5 hover:text-gold">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
