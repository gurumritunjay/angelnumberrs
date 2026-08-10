import { motion } from "framer-motion"
import { Sparkles, Heart, Award, Users } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { CTABanner } from "@/components/shared/CTABanner"
import { team, values } from "@/data/team"

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Sudha Goswami"
        title="Know Me More..."
        description="Welcome to AngelNumberrs — your path to clarity and purpose through the power of numerology. With 10+ years of experience, I help individuals discover their life's unique blueprint and transform challenges into strengths. Let's unlock the messages your numbers carry and guide your next steps with confidence."
      />

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="clay clay-hover p-8 sm:p-12 bg-gradient-to-br from-blue-50 to-white"
        >
          {/* Profile Image Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <div className="clay shrink-0">
              <img 
                src="/images/profile/sudha-profile.jpg" 
                alt="Sudha Goswami - Numerologist"
                className="w-32 h-32 object-cover rounded-2xl"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="hidden w-32 h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600">
                <Sparkles className="h-12 w-12 text-white" strokeWidth={2} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <div className="clay p-3 bg-white">
                  <Sparkles className="h-6 w-6 text-blue-600" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-blue-600 font-bold">My Mission</h2>
                  <p className="text-sm text-gray-500 mt-1">Empowering lives through numerology</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            I believe the signs you keep noticing — a repeating number, a recurring dream, 
            an uncanny coincidence — are worth taking seriously, not as fortune-telling, 
            but as an invitation to pause and reflect. My mission is to make that reflection 
            accessible: content deep enough to trust, delivered simply enough to use.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            As a former software tester turned numerologist, I've combined analytical thinking 
            with spiritual wisdom to help people align their names with their lucky numbers — 
            all based on the one thing that never changes: your birth date.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { icon: Heart, title: "Authenticity", description: "Every reading is personal, warm, and delivered with care", color: "blue" },
            { icon: Award, title: "Expertise", description: "10+ years helping people transform through numerology", color: "green" },
            { icon: Users, title: "Community", description: "Join 10,000+ people who've found clarity", color: "blue" }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="clay clay-hover p-6 bg-white text-center"
            >
              <div className={`clay inline-flex p-3 mb-4 bg-gradient-to-br ${item.color === 'green' ? 'from-green-400 to-green-600' : 'from-blue-400 to-blue-600'}`}>
                <item.icon className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-display text-lg text-blue-600 font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex clay px-4 py-2 mb-4"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Meet the Team</p>
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl text-blue-600 font-bold">Our Astrologers & Numerologists</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="clay clay-hover p-6 text-center bg-white"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white font-display text-xl font-bold shadow-lg">
                {member.initials}
              </div>
              <h3 className="mt-4 font-display text-lg text-blue-600 font-bold">{member.name}</h3>
              <p className="text-xs text-green-600 font-semibold">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <CTABanner
          eyebrow="Work With Us"
          title="Ready to talk to a real person about your reading?"
          description="Our team offers one-on-one consultations for numerology, astrology, and personalized life path guidance."
        />
      </section>
    </>
  )
}
