import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CalendarHeart } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { CalculatorForm } from "@/components/shared/CalculatorForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { calculateLifePathNumber, LIFE_PATH_MEANINGS } from "@/lib/numerology"

const schema = z.object({
  dob: z
    .string()
    .min(1, "Please enter your date of birth")
    .refine((v) => !Number.isNaN(new Date(v).getTime()), "Enter a valid date"),
})

export function LifePathCalculator() {
  const [result, setResult] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  function onSubmit({ dob }) {
    const number = calculateLifePathNumber(dob)
    setResult(number)
  }

  const meaning = result ? LIFE_PATH_MEANINGS[result] : null

  return (
    <CalculatorForm
      icon={CalendarHeart}
      title="Life Path Number"
      description="Calculated from your date of birth"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <Label htmlFor="dob" className="text-ethereal/70">
            Date of birth
          </Label>
          <Input
            id="dob"
            type="date"
            className="mt-2 border-white/10 bg-white/5 text-ethereal [color-scheme:dark] focus-visible:ring-gold/50"
            {...register("dob")}
          />
          {errors.dob && <p className="mt-1.5 text-xs text-destructive">{errors.dob.message}</p>}
        </div>
        <Button type="submit" className="bg-gold text-primary-foreground hover:bg-gold-light">
          Calculate
        </Button>
      </form>

      <AnimatePresence>
        {meaning && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-gold/20 bg-gold/[0.04] p-5 sm:flex-row sm:items-center">
              <span className="font-numeral text-5xl font-semibold text-gradient-gold">
                {result}
              </span>
              <div>
                <p className="font-display text-lg text-ethereal">{meaning.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ethereal/65">{meaning.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </CalculatorForm>
  )
}
