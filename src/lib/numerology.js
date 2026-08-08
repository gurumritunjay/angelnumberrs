// Pure numerology calculation helpers -- no side effects, easy to unit test later.

const MASTER_NUMBERS = [11, 22, 33]

function reduceNumber(num) {
  let n = num
  while (n > 9 && !MASTER_NUMBERS.includes(n)) {
    n = String(n)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0)
  }
  return n
}

/** dateString: "YYYY-MM-DD" from an <input type="date"> */
export function calculateLifePathNumber(dateString) {
  const digits = dateString.replace(/-/g, "")
  const total = digits.split("").reduce((sum, d) => sum + Number(d), 0)
  return reduceNumber(total)
}

const LETTER_VALUES = {
  a: 1, j: 1, s: 1,
  b: 2, k: 2, t: 2,
  c: 3, l: 3, u: 3,
  d: 4, m: 4, v: 4,
  e: 5, n: 5, w: 5,
  f: 6, o: 6, x: 6,
  g: 7, p: 7, y: 7,
  h: 8, q: 8, z: 8,
  i: 9, r: 9,
}

const VOWELS = new Set(["a", "e", "i", "o", "u"])

function sumLetters(name, predicate) {
  const total = name
    .toLowerCase()
    .split("")
    .filter((ch) => LETTER_VALUES[ch] !== undefined && predicate(ch))
    .reduce((sum, ch) => sum + LETTER_VALUES[ch], 0)
  return reduceNumber(total)
}

export function calculateNameNumerology(fullName) {
  return {
    expression: sumLetters(fullName, () => true),
    soulUrge: sumLetters(fullName, (ch) => VOWELS.has(ch)),
    personality: sumLetters(fullName, (ch) => !VOWELS.has(ch)),
  }
}

export const LIFE_PATH_MEANINGS = {
  1: {
    title: "The Leader",
    description:
      "Independent, pioneering, and driven, you're here to initiate and lead rather than follow. Your path rewards courage, self-reliance, and original thinking -- the challenge is learning to lead without losing patience for those still catching up.",
  },
  2: {
    title: "The Diplomat",
    description:
      "Sensitive, cooperative, and deeply attuned to others, you thrive in partnership and mediation. Your path is one of balance and harmony -- the challenge is trusting your own voice as much as you consider everyone else's.",
  },
  3: {
    title: "The Communicator",
    description:
      "Expressive, creative, and naturally joyful, you're here to inspire through words, art, or presence. Your path rewards authentic self-expression -- the challenge is channeling scattered creative energy into finished work.",
  },
  4: {
    title: "The Builder",
    description:
      "Practical, disciplined, and reliable, you build the structures others depend on. Your path rewards patience and hard work -- the challenge is allowing enough flexibility and rest into an otherwise disciplined life.",
  },
  5: {
    title: "The Free Spirit",
    description:
      "Adventurous, adaptable, and freedom-loving, you're here to experience life in its full variety. Your path rewards embracing change -- the challenge is building enough consistency to see long-term goals through.",
  },
  6: {
    title: "The Nurturer",
    description:
      "Responsible, caring, and family-oriented, you're a natural caretaker of people and community. Your path rewards service and devotion -- the challenge is not losing yourself entirely in caring for others.",
  },
  7: {
    title: "The Seeker",
    description:
      "Introspective, analytical, and spiritually curious, you're here to seek deeper truth beneath the surface of things. Your path rewards solitude and study -- the challenge is staying connected rather than isolating.",
  },
  8: {
    title: "The Powerhouse",
    description:
      "Ambitious, capable, and drawn to material mastery, you're built for achievement and authority. Your path rewards disciplined ambition -- the challenge is defining success beyond money and status alone.",
  },
  9: {
    title: "The Humanitarian",
    description:
      "Compassionate, wise, and globally minded, you're here to give back on a larger scale. Your path rewards selflessness and closure -- the challenge is releasing attachment to outcomes you can't control.",
  },
  11: {
    title: "The Intuitive (Master Number)",
    description:
      "Highly intuitive and spiritually attuned, you carry heightened sensitivity and creative inspiration. This master path rewards trusting your visionary insight -- the challenge is managing the nervous energy that comes with it.",
  },
  22: {
    title: "The Master Builder (Master Number)",
    description:
      "You combine the practicality of the Builder with grand, visionary ambition -- capable of turning big dreams into tangible reality. This master path rewards disciplined, large-scale creation -- the challenge is not being overwhelmed by your own potential.",
  },
  33: {
    title: "The Master Teacher (Master Number)",
    description:
      "Rare and deeply compassionate, you're here to uplift others through selfless service and guidance. This master path rewards nurturing on a wide scale -- the challenge is maintaining boundaries while giving so generously.",
  },
}
