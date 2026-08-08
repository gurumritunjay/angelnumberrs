import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Signature } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { CalculatorForm } from "@/components/shared/CalculatorForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { calculateNameNumerology } from "@/lib/numerology"

const schema = z.object({
  fullName: z
    .string()
    .min(2, "Enter your full birth name")
    .regex(/^[a-zA-Z\s'-]+$/, "Letters only, please"),
})

const RESULT_ITEMS = [
  {
    key: "expression",
    label: "Expression Number",
    blurb: "Your natural talents and the traits you project outwardly.",
  },
  {
    key: "soulUrge",
    label: "Soul Urge Number",
    blurb: "The inner desires and motivations that drive you privately.",
  },
  {
    key: "personality",
    label: "Personality Number",
    blurb: "The first impression others form of you before they know you well.",
  },
]

export function NameNumerologyCalculator() {
  const [result, setResult] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  function onSubmit({ fullName }) {
    setResult(calculateNameNumerology(fullName))
  }

  return (
    <CalculatorForm
      icon={Signature}
      title="Name Numerology"
      description="Calculated from the letters in your full birth name"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <Label htmlFor="fullName" className="text-ethereal/70">
            Full birth name
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="e.g. Jordan Alexis Rivera"
            className="mt-2 border-white/10 bg-white/5 text-ethereal placeholder:text-ethereal/35 focus-visible:ring-gold/50"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-destructive">{errors.fullName.message}</p>
          )}
        </div>
        <Button type="submit" className="bg-gold text-primary-foreground hover:bg-gold-light">
          Calculate
        </Button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {RESULT_ITEMS.map((item) => (
                <div
                  key={item.key}
                  className="rounded-2xl border border-gold/20 bg-gold/[0.04] p-4 text-center"
                >
                  <p className="font-numeral text-3xl font-semibold text-gradient-gold">
                    {result[item.key]}
                  </p>
                  <p className="mt-2 font-display text-sm text-ethereal">{item.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ethereal/55">{item.blurb}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </CalculatorForm>
  )
}
