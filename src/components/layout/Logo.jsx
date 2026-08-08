import { Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export function Logo({ className = "" }) {
  return (
    <Link to="/" className={`group flex items-center gap-2 ${className}`}>
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
        <Sparkles className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <span className="font-accent text-lg tracking-wide text-ethereal">
        Angel<span className="text-gold">Numberrs</span>
      </span>
    </Link>
  )
}
