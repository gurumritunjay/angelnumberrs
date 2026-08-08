import { useMemo } from "react"

function seededRandom(seed) {
  let value = seed
  return () => {
    value = (value * 9301 + 49297) % 233280
    return value / 233280
  }
}

/**
 * Decorative starfield + nebula backdrop. Pure CSS/SVG (no canvas) so it
 * stays cheap on mobile and behaves under prefers-reduced-motion.
 */
export function StarField({ density = 90, className = "" }) {
  const stars = useMemo(() => {
    const rand = seededRandom(42)
    return Array.from({ length: density }, (_, i) => ({
      id: i,
      top: rand() * 100,
      left: rand() * 100,
      size: rand() * 2 + 0.5,
      delay: rand() * 4,
      duration: rand() * 3 + 2.5,
      twinkle: rand() > 0.6,
    }))
  }, [density])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-mystic-purple/25 blur-[120px]" />
      <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />
      <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-mystic-purple-deep/30 blur-[110px]" />

      {stars.map((star) => (
        <span
          key={star.id}
          className={`absolute rounded-full bg-ethereal ${star.twinkle ? "animate-twinkle" : ""}`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.twinkle ? undefined : 0.4,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
