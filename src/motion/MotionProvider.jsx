import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'

// - LazyMotion + domAnimation: loads only the animation features we use,
//   so the Framer Motion bundle stays small. Components must use `m`, not `motion`.
// - reducedMotion="user": transform/layout animations respect the OS
//   "Reduce motion" setting automatically.
export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}