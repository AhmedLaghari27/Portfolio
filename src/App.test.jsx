import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

describe('App', () => {
  it('renders the name as the main heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Ahmed Laghari/ }),
    ).toBeTruthy()
  })

  it('has a primary navigation with four links', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: /primary/i })
    expect(nav.querySelectorAll('a')).toHaveLength(4)
  })

  it('toggles the mobile menu', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /open menu/i })
    expect(button.getAttribute('aria-expanded')).toBe('false')

    fireEvent.click(button)
    expect(
      screen
        .getByRole('button', { name: /close menu/i })
        .getAttribute('aria-expanded'),
    ).toBe('true')
  })

  it('renders the about section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: /about me/i }),
    ).toBeTruthy()
    expect(screen.getByText(/B\.Sc\. Computer Science/)).toBeTruthy()
  })

  it('renders the projects section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: /things i've built/i }),
    ).toBeTruthy()
    expect(
      screen.getByRole('heading', { level: 3, name: 'AutoCares' }),
    ).toBeTruthy()
  })

  it('opens project GitHub links safely in a new tab', () => {
    render(<App />)
    const links = screen.getAllByRole('link', { name: /source code on github/i })
    expect(links.length).toBeGreaterThan(0)
    links.forEach((link) => {
      expect(link.getAttribute('href')).toMatch(/^https:\/\/github\.com\//)
      expect(link.getAttribute('target')).toBe('_blank')
      expect(link.getAttribute('rel')).toContain('noopener')
    })
  })
})