import { Link } from "react-router-dom"
import { MoonStar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarField } from "@/components/shared/StarField"

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden px-4 pt-16 text-center">
      <StarField density={70} />
      <div className="relative">
        <MoonStar className="mx-auto h-10 w-10 text-gold animate-float" strokeWidth={1.5} />
        <p className="mt-6 font-numeral text-7xl font-semibold text-gradient-gold">404</p>
        <h1 className="mt-4 font-display text-2xl text-ethereal">
          Even the stars lost this page.
        </h1>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ethereal/55">
          The path you're looking for doesn't exist -- but plenty of others do.
        </p>
        <Button asChild className="mt-8 bg-gold text-primary-foreground hover:bg-gold-light">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </section>
  )
}
