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
        scrolled ? "clay shadow-lg" : "border-b border-transparent bg-transparent"
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
                  "relative text-sm font-semibold text-gray-600 transition-colors hover:text-blue-600",
                  "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:rounded-full after:transition-all after:duration-300 hover:after:w-full",
                  isActive && "text-blue-600 after:w-full"
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
            className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
          >
            <Link to="/contact">Sign In</Link>
          </Button>
          <Button
            asChild
            className="clay-button text-white font-semibold"
          >
            <Link to="/contact">
              Book a Reading
              <ChevronRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-blue-600 lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="clay border-l-0">
            <SheetHeader>
              <SheetTitle className="text-blue-600 font-bold">Navigate</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2 px-4 mt-6">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "rounded-xl px-4 py-3 text-base font-semibold text-gray-600 transition-all hover:bg-blue-50 hover:text-blue-600",
                        isActive && "bg-blue-50 text-blue-600"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </SheetClose>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 px-4">
              <SheetClose asChild>
                <Button asChild className="w-full clay-button text-white font-semibold">
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
