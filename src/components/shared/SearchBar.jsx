import { useMemo, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, Sparkles } from "lucide-react"
import { angelNumbers } from "@/data/angelNumbers"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SearchBar({ className = "", placeholder = "Search an angel number..." }) {
  const [query, setQuery] = useState("")
  const [focused, setFocused] = useState(false)
  const navigate = useNavigate()
  const containerRef = useRef(null)

  const suggestions = useMemo(() => {
    if (!query.trim()) return []
    const q = query.trim().toLowerCase()
    return angelNumbers
      .filter(
        (n) =>
          n.number.startsWith(q) ||
          n.category.some((c) => c.toLowerCase().includes(q))
      )
      .slice(0, 6)
  }, [query])

  function goTo(number) {
    setQuery("")
    setFocused(false)
    navigate(`/angel-numbers/${number}`)
  }

  function onSubmit(e) {
    e.preventDefault()
    const digitsOnly = query.trim().replace(/[^0-9]/g, "")
    if (digitsOnly) goTo(digitsOnly)
  }

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <form onSubmit={onSubmit} className="glass flex items-center gap-2 rounded-full p-1.5 pl-4">
        <Search className="h-4 w-4 shrink-0 text-ethereal/40" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder={placeholder}
          className="h-9 border-none bg-transparent px-0 text-ethereal placeholder:text-ethereal/35 focus-visible:ring-0"
        />
        <Button type="submit" className="shrink-0 rounded-full bg-gold text-primary-foreground hover:bg-gold-light">
          <Search className="h-4 w-4 sm:hidden" />
          <span className="hidden sm:inline">Reveal Meaning</span>
        </Button>
      </form>

      {focused && suggestions.length > 0 && (
        <div className="glass absolute inset-x-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-2xl p-2">
          {suggestions.map((s) => (
            <button
              key={s.number}
              type="button"
              onMouseDown={() => goTo(s.number)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-white/5"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-gold/60" />
                <span className="font-numeral text-ethereal">{s.number}</span>
              </span>
              <span className="truncate pl-4 text-xs text-ethereal/45">{s.category.join(" · ")}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
