import { useEffect, useRef, useState } from 'react'
import useActiveSection from '../hooks/useActiveSection'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
const sectionIds = ['top', ...links.map((l) => l.id)]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const sentinelRef = useRef(null)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <div ref={sentinelRef} className="scroll-sentinel" aria-hidden="true" />
      <header className="header" data-scrolled={scrolled} data-open={open}>
        <div className="header-inner">
          <a href="#top" className="logo" aria-label="Ahmed Laghari, back to top">
            AL
          </a>

          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="menu-bar" />
            <span className="menu-bar" />
          </button>

          <nav
            id="primary-nav"
            className={`nav${open ? ' is-open' : ''}`}
            aria-label="Primary"
          >
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}