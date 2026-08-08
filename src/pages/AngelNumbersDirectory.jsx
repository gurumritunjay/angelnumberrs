import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Search, X } from "lucide-react"
import { angelNumbers, allCategories } from "@/data/angelNumbers"
import { AngelNumberCard } from "@/components/angel-numbers/AngelNumberCard"
import { PageHero } from "@/components/shared/PageHero"
import { CTABanner } from "@/components/shared/CTABanner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PAGE_SIZE = 12

export default function AngelNumbersDirectory() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState(null)
  const [visible, setVisible] = useState(PAGE_SIZE)

  const filtered = useMemo(() => {
    return angelNumbers.filter((entry) => {
      const matchesQuery =
        !query.trim() ||
        entry.number.includes(query.trim()) ||
        entry.summary.toLowerCase().includes(query.trim().toLowerCase())
      const matchesCategory = !category || entry.category.includes(category)
      return matchesQuery && matchesCategory
    })
  }, [query, category])

  const visibleEntries = filtered.slice(0, visible)

  return (
    <>
      <PageHero
        eyebrow="Directory"
        title="Every Angel Number, Decoded"
        description="Search by number or theme to find the guidance you're being shown."
      />

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="glass sticky top-20 z-10 mb-10 flex flex-col gap-4 rounded-2xl p-4">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-ethereal/40" />
            <Input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setVisible(PAGE_SIZE)
              }}
              placeholder="Search by number, e.g. 555"
              className="h-10 border-white/10 bg-white/5 pl-9 text-ethereal placeholder:text-ethereal/35 focus-visible:ring-gold/50"
            />
          </div>

          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              onClick={() => {
                setCategory(null)
                setVisible(PAGE_SIZE)
              }}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1.5 text-xs whitespace-nowrap transition-colors",
                !category
                  ? "border-gold/50 bg-gold/10 text-gold"
                  : "border-white/10 text-ethereal/55 hover:border-white/25"
              )}
            >
              All
            </button>
            {allCategories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCategory(c === category ? null : c)
                  setVisible(PAGE_SIZE)
                }}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1.5 text-xs whitespace-nowrap transition-colors",
                  category === c
                    ? "border-gold/50 bg-gold/10 text-gold"
                    : "border-white/10 text-ethereal/55 hover:border-white/25"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {visibleEntries.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-3 py-24 text-center"
          >
            <X className="h-6 w-6 text-ethereal/30" />
            <p className="text-ethereal/50">No angel numbers match your search.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {visibleEntries.map((entry, i) => (
              <AngelNumberCard key={entry.number} entry={entry} index={i} />
            ))}
          </div>
        )}

        {visible < filtered.length && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="border-white/15 bg-white/[0.02] text-ethereal/80 hover:bg-white/5 hover:text-gold"
            >
              Load More Numbers
            </Button>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <CTABanner
          eyebrow="Go Deeper"
          title="Can't find the exact pattern you're seeing?"
          description="Book a personal numerology reading and get a meaning tailored to your unique sequence and circumstances."
        />
      </section>
    </>
  )
}
