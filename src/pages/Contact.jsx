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
        description="Reach out about a reading, a partnership, or anything else -- we read every message."
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
            { icon: Mail, title: "Email", value: "hello@angelnumberrs.com" },
            { icon: MapPin, title: "Studio", value: "Remote-first, worldwide readings" },
            { icon: Clock, title: "Response Time", value: "Within 1-2 business days" },
          ].map((item) => (
            <div key={item.title} className="glass flex items-start gap-4 rounded-2xl p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                <item.icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-display text-sm text-ethereal">{item.title}</p>
                <p className="mt-0.5 text-sm text-ethereal/55">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8"
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
                <CheckCircle2 className="h-10 w-10 text-gold" />
                <p className="font-display text-xl text-ethereal">Message sent</p>
                <p className="max-w-sm text-sm text-ethereal/55">
                  Thank you for reaching out -- we'll get back to you within 1-2 business days.
                </p>
                <Button variant="ghost" onClick={() => setSubmitted(false)} className="mt-2 text-gold hover:bg-white/5">
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
                    <Label htmlFor="name" className="text-ethereal/70">Name</Label>
                    <Input
                      id="name"
                      className="mt-2 border-white/10 bg-white/5 text-ethereal placeholder:text-ethereal/35 focus-visible:ring-gold/50"
                      placeholder="Jordan Rivera"
                      {...register("name")}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-ethereal/70">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      className="mt-2 border-white/10 bg-white/5 text-ethereal placeholder:text-ethereal/35 focus-visible:ring-gold/50"
                      placeholder="you@example.com"
                      {...register("email")}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <Label className="text-ethereal/70">Subject</Label>
                  <Controller
                    control={control}
                    name="subject"
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="mt-2 w-full border-white/10 bg-white/5 text-ethereal">
                          <SelectValue placeholder="Choose a topic" />
                        </SelectTrigger>
                        <SelectContent className="border-white/10 bg-popover">
                          {SUBJECTS.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.subject && <p className="mt-1.5 text-xs text-destructive">{errors.subject.message}</p>}
                </div>

                <div>
                  <Label htmlFor="message" className="text-ethereal/70">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    className="mt-2 border-white/10 bg-white/5 text-ethereal placeholder:text-ethereal/35 focus-visible:ring-gold/50"
                    placeholder="Tell us what's on your mind..."
                    {...register("message")}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-primary-foreground hover:bg-gold-light glow-gold sm:w-auto"
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
          <p className="text-xs tracking-[0.25em] text-gold/80 uppercase">FAQ</p>
          <h2 className="mt-3 font-display text-3xl text-ethereal">Frequently Asked Questions</h2>
        </div>
        <div className="glass rounded-3xl px-6 sm:px-8">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="py-5 text-base text-ethereal hover:no-underline [&_svg]:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-ethereal/60">
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
