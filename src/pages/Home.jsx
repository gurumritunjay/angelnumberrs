import { HeroSection } from "@/components/home/HeroSection"
import { IntroSection } from "@/components/home/IntroSection"
import { FeaturedNumbers } from "@/components/home/FeaturedNumbers"
import { NewsletterSection } from "@/components/home/NewsletterSection"
import { DailyWidget } from "@/components/shared/DailyWidget"
import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel"
import { CTABanner } from "@/components/shared/CTABanner"

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <DailyWidget />
      </section>

      <FeaturedNumbers />

      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <TestimonialCarousel />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
        <CTABanner />
      </section>

      <NewsletterSection />
    </>
  )
}
