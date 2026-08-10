import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FileText, Building2, Baby, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const SERVICES = [
  {
    icon: FileText,
    title: "Detailed Personalised Report",
    price: "₹3,200",
    features: [
      "Name correction and remedies",
      "Strengths, Weaknesses and how to overcome it",
      "Lucky numbers, colours, mobile & bank account numbers",
      "Personal Year analysis and Profession"
    ],
    color: "blue"
  },
  {
    icon: Building2,
    title: "Corporate Numerology",
    price: "₹4,200",
    features: [
      "Analysis of your Current Company Name",
      "Partnership Compatibility Analysis"
    ],
    color: "green"
  },
  {
    icon: Baby,
    title: "New Born Baby Name",
    price: "₹2,400",
    features: [
      "Name Suggestion of the Baby as per Numerology in Sync with DOB"
    ],
    color: "blue"
  },
  {
    icon: Heart,
    title: "Marriage Compatibility",
    price: "₹5,100",
    features: [
      "Marriage compatibility according to boy and girl DOB"
    ],
    color: "green"
  }
]

export function ServicesSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <div className="inline-flex clay px-4 py-2 mb-4">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Services</p>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-blue-600 font-bold">
          Personalized Numerology Services
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg max-w-2xl mx-auto">
          Discover clarity and direction through personalized numerology consultations tailored to your unique life path
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="clay clay-hover p-6 bg-white flex flex-col"
          >
            <div className={`clay inline-flex p-3 mb-4 self-start bg-gradient-to-br ${
              service.color === 'green' 
                ? 'from-green-400 to-green-600' 
                : 'from-blue-400 to-blue-600'
            }`}>
              <service.icon className="h-6 w-6 text-white" strokeWidth={2} />
            </div>
            
            <h3 className="font-display text-lg text-blue-600 font-bold mb-2">
              {service.title}
            </h3>
            
            <p className="text-2xl font-bold text-green-600 mb-4">
              {service.price}
            </p>
            
            <ul className="space-y-2 mb-6 flex-grow">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button
              asChild
              variant="outline"
              className="w-full clay clay-hover bg-white text-blue-600"
            >
              <Link to="/contact">
                Book Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
