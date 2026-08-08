import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { CTABanner } from "@/components/shared/CTABanner"
import { team, values } from "@/data/team"

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Guidance Rooted in Practice, Not Guesswork"
        description="Angel Numberrs started as a single blog post explaining 1111 to a curious friend. It's grown into a full practice built around one belief: ancient number wisdom deserves modern clarity."
      />

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 sm:p-12"
        >
          <Sparkles className="h-6 w-6 text-gold" strokeWidth={1.5} />
          <h2 className="mt-4 font-display text-2xl text-ethereal sm:text-3xl">Our Mission</h2>
          <p className="mt-4 text-base leading-relaxed text-ethereal/70">
            We believe the signs you keep noticing -- a repeating number, a
            recurring dream, an uncanny coincidence -- are worth taking
            seriously, not as fortune-telling, but as an invitation to pause
            and reflect. Our mission is to make that reflection accessible:
            content deep enough to trust, delivered simply enough to use.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-display text-lg text-ethereal">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ethereal/55">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs tracking-[0.25em] text-gold/80 uppercase">Meet the Team</p>
          <h2 className="mt-3 font-display text-3xl text-ethereal">Our Astrologers &amp; Numerologists</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-6 text-center"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-lg text-gold">
                {member.initials}
              </span>
              <h3 className="mt-4 font-display text-lg text-ethereal">{member.name}</h3>
              <p className="text-xs text-gold/70">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ethereal/55">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <CTABanner
          eyebrow="Work With Us"
          title="Ready to talk to a real person about your reading?"
          description="Our team offers one-on-one consultations for numerology, astrology, and tarot."
        />
      </section>
    </>
  )
}
