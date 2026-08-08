import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/layout/Logo"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/angel-numbers", label: "Angel Numbers" },
  { to: "/numerology", label: "Numerology" },
  { to: "/horoscope", label: "Horoscope" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "relative text-sm font-medium tracking-wide text-ethereal/75 transition-colors hover:text-gold",
                  "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                  isActive && "text-gold after:w-full"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="ghost"
            className="text-ethereal/80 hover:bg-white/5 hover:text-gold"
          >
            <Link to="/contact">Sign In</Link>
          </Button>
          <Button
            asChild
            className="bg-gold text-primary-foreground hover:bg-gold-light glow-gold"
          >
            <Link to="/contact">
              Book a Reading
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-ethereal lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass border-l border-white/10 bg-midnight/95">
            <SheetHeader>
              <SheetTitle className="font-accent text-gold">Navigate</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "rounded-lg px-3 py-3 text-base font-medium text-ethereal/85 transition-colors hover:bg-white/5 hover:text-gold",
                        isActive && "text-gold"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </SheetClose>
              ))}
            </div>
            <div className="mt-2 flex flex-col gap-2 px-4">
              <SheetClose asChild>
                <Button asChild className="w-full bg-gold text-primary-foreground hover:bg-gold-light">
                  <Link to="/contact">Book a Reading</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
