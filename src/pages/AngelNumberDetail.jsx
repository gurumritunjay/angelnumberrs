import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Sparkles,
  Heart,
  Briefcase,
  Infinity as InfinityIcon,
  Flame,
  Link2,
  Check,
  ArrowRight,
} from "lucide-react"
import { XIcon, FacebookIcon } from "@/components/shared/SocialIcons"
import { getAngelNumber, angelNumberIndex } from "@/data/angelNumbers"
import { StarField } from "@/components/shared/StarField"
import { CTABanner } from "@/components/shared/CTABanner"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import NotFound from "@/pages/NotFound"

const SECTIONS = [
  { key: "meaning", label: "Meaning", icon: Sparkles },
  { key: "spiritual", label: "Spiritual", icon: Flame },
  { key: "love", label: "Love", icon: Heart },
  { key: "career", label: "Career", icon: Briefcase },
  { key: "twinFlame", label: "Twin Flame", icon: InfinityIcon },
]

export default function AngelNumberDetail() {
  const { number } = useParams()
  const entry = getAngelNumber(number)
  const [copied, setCopied] = useState(false)

  if (!entry) return <NotFound />

  const related = entry.related.map((n) => angelNumberIndex[n]).filter(Boolean)

  function copyLink() {
    navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareText = encodeURIComponent(`${entry.number} Angel Number Meaning`)
  const shareUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40">
        <StarField density={60} />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs tracking-[0.25em] text-gold/80 uppercase">Angel Number</p>
            <h1 className="mt-3 font-numeral text-7xl font-semibold text-gradient-gold sm:text-8xl">
              {entry.number}
            </h1>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {entry.category.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-ethereal/60"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-5 max-w-xl text-balance text-sm leading-relaxed text-ethereal/65 sm:text-base">
              {entry.summary}
            </p>

            <div className="mt-6 flex items-center justify-center gap-2">
              <Button variant="ghost" size="icon" onClick={copyLink} className="text-ethereal/50 hover:bg-white/5 hover:text-gold" aria-label="Copy link">
                {copied ? <Check className="h-4 w-4 text-gold" /> : <Link2 className="h-4 w-4" />}
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-ethereal/50 hover:bg-white/5 hover:text-gold">
                <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noreferrer" aria-label="Share on X">
                  <XIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-ethereal/50 hover:bg-white/5 hover:text-gold">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook">
                  <FacebookIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-4xl px-4 pb-20 sm:px-6">
        <Tabs defaultValue="meaning" className="items-center">
          <TabsList className="glass h-auto flex-wrap gap-1 rounded-full bg-transparent p-1.5">
            {SECTIONS.map(({ key, label, icon: Icon }) => (
              <TabsTrigger
                key={key}
                value={key}
                className="gap-1.5 rounded-full px-4 py-2 text-ethereal/60 data-active:bg-gold/15 data-active:text-gold"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {SECTIONS.map(({ key }) => (
            <TabsContent key={key} value={key} className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="glass mt-6 rounded-3xl p-6 sm:p-10"
              >
                <p className="text-base leading-relaxed text-ethereal/80 sm:text-lg">
                  {entry[key]}
                </p>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
          <h2 className="mb-6 text-center font-display text-2xl text-ethereal">Related Numbers</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.number}
                to={`/angel-numbers/${r.number}`}
                className="glass glass-hover group flex items-center justify-between rounded-2xl p-5"
              >
                <div>
                  <p className="font-numeral text-2xl font-semibold text-gradient-gold">{r.number}</p>
                  <p className="mt-1 text-xs text-ethereal/50">{r.category[0]}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-ethereal/30 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <CTABanner
          title={`Want a deeper reading on ${entry.number}?`}
          description="A live consultation can connect this number's meaning directly to your birth chart and current circumstances."
        />
      </section>
    </>
  )
}
