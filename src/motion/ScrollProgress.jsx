import { m, useScroll, useSpring } from 'motion/react'
import usePrefersReducedMotion from './usePrefersReducedMotion'

// Thin gradient bar at the top of the page that fills as you scroll.
// Uses motion values, so scrolling never re-renders React.
export default function ScrollProgress() {
  const reduce = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <m.div
      className="scroll-progress"
      data-testid="scroll-progress"
      aria-hidden="true"
      style={{ scaleX: reduce ? scrollYProgress : smooth }}
    />
  )
}