import { Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export function Logo({ className = "" }) {
  return (
    <Link to="/" className={`group flex items-center gap-2 ${className}`}>
      <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg transition-transform group-hover:scale-105">
        <Sparkles className="h-5 w-5" strokeWidth={2} />
      </span>
      <span className="font-display text-xl font-bold text-blue-600">
        Angel<span className="text-green-500">Numberrs</span>
      </span>
    </Link>
  )
}
