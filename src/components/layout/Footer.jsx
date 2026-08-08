import { Link } from "react-router-dom"
import { ArrowRight, Sparkles } from "lucide-react"
import { InstagramIcon, FacebookIcon, XIcon, YoutubeIcon } from "@/components/shared/SocialIcons"
import { Logo } from "@/components/layout/Logo"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const FEATURED_NUMBERS = ["111", "222", "333", "444", "555", "777", "1111"]

const EXPLORE_LINKS = [
  { to: "/angel-numbers", label: "Angel Numbers Directory" },
  { to: "/numerology", label: "Numerology Tools" },
  { to: "/horoscope", label: "Daily Horoscope" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
]

const SOCIALS = [
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: XIcon, href: "https://twitter.com", label: "X (Twitter)" },
  { icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-midnight-deep">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-mystic-purple/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ethereal/60">
              Decode the signs the universe keeps sending you. Angel numbers,
              numerology, and astrology guidance for a more intentional life.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ethereal/60 transition-colors hover:border-gold/40 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-accent text-sm tracking-widest text-gold uppercase">Explore</h3>
            <ul className="mt-4 space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ethereal/65 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-accent text-sm tracking-widest text-gold uppercase">Popular Numbers</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {FEATURED_NUMBERS.map((n) => (
                <li key={n}>
                  <Link
                    to={`/angel-numbers/${n}`}
                    className="flex items-center gap-1 text-sm text-ethereal/65 transition-colors hover:text-gold"
                  >
                    <Sparkles className="h-3 w-3 text-gold/50" />
                    {n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-accent text-sm tracking-widest text-gold uppercase">Stay Aligned</h3>
            <p className="mt-4 text-sm text-ethereal/60">
              Get your daily angel number and horoscope, delivered weekly.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                required
                placeholder="you@example.com"
                className="border-white/10 bg-white/5 text-ethereal placeholder:text-ethereal/40 focus-visible:ring-gold/50"
              />
              <Button size="icon" className="shrink-0 bg-gold text-primary-foreground hover:bg-gold-light">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-ethereal/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Angel Numberrs. All rights reserved.</p>
          <p>For entertainment and reflection purposes. Trust your own intuition.</p>
        </div>
      </div>
    </footer>
  )
}
