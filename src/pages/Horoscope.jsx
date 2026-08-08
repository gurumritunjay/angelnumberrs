import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CalendarDays, Palette, Hash, Flame } from "lucide-react"
import { zodiacSigns, zodiacIndex } from "@/data/zodiacSigns"
import { ZodiacCard } from "@/components/horoscope/ZodiacCard"
import { PageHero } from "@/components/shared/PageHero"
import { CTABanner } from "@/components/shared/CTABanner"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function Horoscope() {
  const [selected, setSelected] = useState("aries")
  const sign = zodiacIndex[selected]

  return (
    <>
      <PageHero
        eyebrow="Horoscope"
        title="What the Stars Have Planned"
        description="Select your sign to reveal today's reading, plus a look at the week and month ahead."
      />

      <section className="relative mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {zodiacSigns.map((s, i) => (
            <ZodiacCard
              key={s.key}
              sign={s}
              index={i}
              selected={selected === s.key}
              onSelect={setSelected}
            />
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={sign.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-mystic-purple/20 blur-[90px]" />

            <div className="relative flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-3xl text-gold">
                  {sign.symbol}
                </span>
                <div>
                  <h2 className="font-display text-2xl text-ethereal">{sign.name}</h2>
                  <p className="text-sm text-ethereal/50">{sign.dateRange}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-4 text-xs text-ethereal/55 sm:mt-0">
                <span className="flex items-center gap-1.5">
                  <Flame className="h-3.5 w-3.5 text-gold/60" /> {sign.element}
                </span>
                <span className="flex items-center gap-1.5">
                  <Palette className="h-3.5 w-3.5 text-gold/60" /> {sign.luckyColor}
                </span>
                <span className="flex items-center gap-1.5">
                  <Hash className="h-3.5 w-3.5 text-gold/60" /> {sign.luckyNumber}
                </span>
              </div>
            </div>

            <div className="relative mt-6 flex flex-wrap gap-2">
              {sign.traits.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-ethereal/60">
                  {t}
                </span>
              ))}
            </div>

            <Tabs defaultValue="daily" className="relative mt-8">
              <TabsList className="bg-white/5">
                <TabsTrigger value="daily" className="data-active:bg-gold/15 data-active:text-gold">
                  <CalendarDays className="h-3.5 w-3.5" /> Daily
                </TabsTrigger>
                <TabsTrigger value="weekly" className="data-active:bg-gold/15 data-active:text-gold">
                  Weekly
                </TabsTrigger>
                <TabsTrigger value="monthly" className="data-active:bg-gold/15 data-active:text-gold">
                  Monthly
                </TabsTrigger>
              </TabsList>
              <TabsContent value="daily" className="mt-4 text-base leading-relaxed text-ethereal/75">
                {sign.daily}
              </TabsContent>
              <TabsContent value="weekly" className="mt-4 text-base leading-relaxed text-ethereal/75">
                {sign.weekly}
              </TabsContent>
              <TabsContent value="monthly" className="mt-4 text-base leading-relaxed text-ethereal/75">
                {sign.monthly}
              </TabsContent>
            </Tabs>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <CTABanner
          eyebrow="Personal Chart"
          title="A daily horoscope is general. Your birth chart isn't."
          description="Book a session with an astrologer for a reading based on your exact time and place of birth."
        />
      </section>
    </>
  )
}
