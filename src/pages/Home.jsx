import { HeroSection } from "@/components/home/HeroSection"
import { IntroSection } from "@/components/home/IntroSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { FeaturedNumbers } from "@/components/home/FeaturedNumbers"
import { NewsletterSection } from "@/components/home/NewsletterSection"
import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel"
import { CTABanner } from "@/components/shared/CTABanner"

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <div id="about">
        <IntroSection />
      </div>

      <div id="services">
        <ServicesSection />
      </div>

      <FeaturedNumbers />

      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <TestimonialCarousel />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
        <CTABanner 
          title="Ready to Discover Your Life's Path?"
          description="Book a personalized numerology consultation with Sudha Goswami and unlock the power of numbers in your life."
          ctaLabel="Book Your Reading Now"
        />
      </section>

      <NewsletterSection />
    </>
  )
}
