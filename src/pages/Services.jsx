import { PageHero } from "@/components/shared/PageHero"
import { ServicesSection } from "@/components/home/ServicesSection"
import { CTABanner } from "@/components/shared/CTABanner"

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Personalized Numerology Consultations"
        description="Discover your life's path through personalized numerology services. From name corrections to marriage compatibility, find the guidance you need."
      />

      <ServicesSection />

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <CTABanner
          eyebrow="Book Now"
          title="Ready to Start Your Numerology Journey?"
          description="Contact Sudha Goswami for a personalized consultation tailored to your unique needs."
          ctaLabel="Book Your Reading"
        />
      </section>
    </>
  )
}
