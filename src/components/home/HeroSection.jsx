import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Star } from "lucide-react"
import { SearchBar } from "@/components/shared/SearchBar"
import { Button } from "@/components/ui/button"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function HeroSection() {
  return (
    <section className="relative min-h-[92svh] flex items-center overflow-hidden pt-24 pb-16">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-30 blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[15%] w-40 h-40 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-25 blur-2xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-[25%] w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-20 blur-xl"
        />
      </div>

      {/* Optional: Numbered Stones Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/images/hero/numbered-stones.jpg" 
          alt="" 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl flex flex-col items-center px-4 sm:px-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.span
            variants={item}
            className="clay inline-flex items-center gap-2 mb-6 px-5 py-2.5 text-sm font-medium text-blue-600"
          >
            <Star className="h-4 w-4 text-green-500 animate-pulse-soft" fill="currentColor" />
            ANGEL NUMBERRS · GUIDING LIVES
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.1] text-blue-600 text-balance"
          >
            Unlock the Magic of <span className="text-gradient-blue">Angel Numbers</span>
            <br />
            and Discover Your Life's Path
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-gray-600"
          >
            Welcome to AngelNumberrs — your path to clarity and purpose through the power of numerology. 
            With over 10+ years of experience, I help people discover their life's unique blueprint 
            and transform challenges into strengths.
          </motion.p>

          <motion.div variants={item} className="mt-10 w-full max-w-lg">
            <SearchBar />
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="clay-button text-white font-semibold px-6 hover:scale-105 transition-transform"
            >
              <a href="#services">
                View Our Services
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="clay clay-hover bg-white text-blue-600 border-none font-semibold px-6"
            >
              <a href="#about">
                <Sparkles className="h-4 w-4 mr-2" />
                Learn More
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 border-2 border-white"
                  />
                ))}
              </div>
              <span>Trusted by thousands</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-1">10+ Years Experience</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
