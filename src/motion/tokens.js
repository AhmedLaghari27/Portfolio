// JS mirror of the CSS motion tokens in src/index.css.
// Keep both in sync so CSS, GSAP and Framer Motion feel identical.

export const duration = {
  fast: 0.16,
  base: 0.32,
  slow: 0.6,
  section: 0.8,
}

export const stagger = {
  tight: 0.04,
  base: 0.08,
}

// Same curve as --ease-out in CSS, for Framer Motion.
export const easeOut = [0.22, 1, 0.36, 1]

// GSAP ease names.
export const gsapEase = {
  out: 'expo.out',
  soft: 'power3.out',
  inOut: 'power2.inOut',
}

export const spring = {
  ui: { type: 'spring', stiffness: 300, damping: 30 },
  playful: { type: 'spring', stiffness: 400, damping: 20 },
}