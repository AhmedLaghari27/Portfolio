import { useEffect, useRef } from 'react'

export default function useRevealOnScroll() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root || typeof IntersectionObserver === 'undefined') return

    const targets = root.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((el) => {
      el.classList.add('reveal-ready')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return ref
}