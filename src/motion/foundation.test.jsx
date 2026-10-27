import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import App from '../App'
import { duration, easeOut } from './tokens'
import { gsap, ScrollTrigger, useGSAP } from './gsap'

afterEach(cleanup)

describe('motion foundation', () => {
  it('renders the scroll progress bar as a decorative element', () => {
    render(<App />)
    const bar = screen.getByTestId('scroll-progress')
    expect(bar.getAttribute('aria-hidden')).toBe('true')
  })

  it('exposes consistent motion tokens', () => {
    expect(duration.base).toBeGreaterThan(duration.fast)
    expect(easeOut).toHaveLength(4)
  })

  it('loads gsap, ScrollTrigger and useGSAP without crashing in jsdom', () => {
    expect(typeof gsap.to).toBe('function')
    expect(ScrollTrigger).toBeTruthy()
    expect(typeof useGSAP).toBe('function')
  })
})