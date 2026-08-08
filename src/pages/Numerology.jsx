import { PageHero } from "@/components/shared/PageHero"
import { LifePathCalculator } from "@/components/numerology/LifePathCalculator"
import { NameNumerologyCalculator } from "@/components/numerology/NameNumerologyCalculator"
import { CTABanner } from "@/components/shared/CTABanner"

export default function Numerology() {
  return (
    <>
      <PageHero
        eyebrow="Numerology Tools"
        title="Your Numbers, Decoded"
        description="Numerology translates your birth date and name into a map of personality, purpose, and pattern. Calculate yours below."
      />

      <section className="relative mx-auto max-w-3xl space-y-6 px-4 pb-24 sm:px-6">
        <LifePathCalculator />
        <NameNumerologyCalculator />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <CTABanner
          eyebrow="Full Chart"
          title="Your numbers are just the starting point."
          description="A certified numerologist can map your full chart -- Life Path, Expression, Soul Urge, Personal Year -- and show you how they interact."
        />
      </section>
    </>
  )
}
