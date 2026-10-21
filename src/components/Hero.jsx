import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef(null)
  const glowRef = useRef(null)

  // Cursor spotlight: desktop pointers only, skipped for reduced motion.
  useEffect(() => {
    const section = sectionRef.current
    const glow = glowRef.current
    if (!section || !glow || typeof window.matchMedia !== 'function') return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (reduce || !finePointer) return

    let frame = 0

    const onMove = (e) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const x = e.clientX - rect.left - glow.offsetWidth / 2
        const y = e.clientY - rect.top - glow.offsetHeight / 2
        glow.style.transform = `translate3d(${x}px, ${y}px, 0)`
        glow.style.opacity = '1'
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      glow.style.opacity = '0'
    }

    section.addEventListener('pointermove', onMove)
    section.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <section id="top" className="hero" ref={sectionRef}>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="hero-glow" ref={glowRef} />
      </div>

      <div className="hero-content">
        <p className="badge reveal" style={{ '--i': 0 }}>
          <span className="badge-dot" aria-hidden="true" />
          Learning AWS &amp; CI/CD in public
        </p>

        <h1 className="hero-title">
          <span className="word reveal" style={{ '--i': 1 }}>Ahmed</span>{' '}
          <span className="word gradient-text reveal" style={{ '--i': 2 }}>Laghari</span>
        </h1>

        <p className="hero-tagline reveal" style={{ '--i': 3 }}>
          I build web apps and learn cloud and CI/CD along the way.
        </p>

        <div className="hero-actions reveal" style={{ '--i': 4 }}>
          <a href="#projects" className="btn btn-primary">
            View my work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>
      </div>

      <span className="scroll-cue" aria-hidden="true" />
    </section>
  )
}