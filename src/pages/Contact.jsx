import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { faqs } from "@/data/faqs"

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(1, "Please choose a topic"),
  message: z.string().min(10, "Message should be at least 10 characters"),
})

const SUBJECTS = [
  { value: "reading", label: "Book a Reading" },
  { value: "support", label: "General Support" },
  { value: "press", label: "Press & Partnerships" },
  { value: "other", label: "Something Else" },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) })

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
    reset()
  }

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Questions, Bookings & Everything Between"
        description="Reach out for a personalized numerology consultation. Contact Sudha Goswami directly for guidance on your life path."
      />

      <section className="relative mx-auto grid max-w-6xl gap-8 px-4 pb-24 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {[
            { icon: Mail, title: "Email", value: "sudha@angelnumberrs.com" },
            { icon: MapPin, title: "Location", value: "Bangalore, India" },
            { icon: Clock, title: "Phone", value: "+91 9148342906" },
          ].map((item) => (
            <div key={item.title} className="clay clay-hover flex items-start gap-4 p-5 bg-white">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center clay bg-gradient-to-br from-blue-400 to-blue-600">
                <item.icon className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <div>
                <p className="font-display text-sm text-blue-600 font-bold">{item.title}</p>
                <p className="mt-0.5 text-sm text-gray-600">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="clay relative overflow-hidden p-6 sm:p-8 bg-white"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center gap-3 py-16 text-center"
              >
                <CheckCircle2 className="h-10 w-10 text-green-500" />
                <p className="font-display text-xl text-blue-600 font-bold">Message sent</p>
                <p className="max-w-sm text-sm text-gray-600">
                  Thank you for reaching out -- we'll get back to you within 1-2 business days.
                </p>
                <Button variant="ghost" onClick={() => setSubmitted(false)} className="mt-2 text-blue-600 hover:bg-blue-50">
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="text-gray-600 font-semibold">Name</Label>
                  <Input
                    id="name"
                    className="mt-2 clay-inset border-none text-gray-600 placeholder:text-gray-400"
                    placeholder="Jordan Rivera"
                    {...register("name")}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-600 font-semibold">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-2 clay-inset border-none text-gray-600 placeholder:text-gray-400"
                    placeholder="you@example.com"
                    {...register("email")}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>}
                </div>
                </div>

                <div>
                  <Label className="text-gray-600 font-semibold">Subject</Label>
                  <Controller
                    control={control}
                    name="subject"
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="mt-2 w-full clay-inset border-none text-gray-600">
                          <SelectValue placeholder="Choose a topic" />
                        </SelectTrigger>
                        <SelectContent className="border-blue-100 bg-white">
                          {SUBJECTS.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.subject && <p className="mt-1.5 text-xs text-red-600">{errors.subject.message}</p>}
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-600 font-semibold">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    className="mt-2 clay-inset border-none text-gray-600 placeholder:text-gray-400"
                    placeholder="Tell us what's on your mind..."
                    {...register("message")}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full clay-button font-semibold sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <div className="mb-8 text-center">
          <div className="inline-flex clay px-4 py-2 mb-3">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">FAQ</p>
          </div>
          <h2 className="font-display text-3xl text-blue-600 font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="clay px-6 sm:px-8 bg-white">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`} className="border-blue-100">
                <AccordionTrigger className="py-5 text-base text-blue-600 font-semibold hover:no-underline [&_svg]:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
