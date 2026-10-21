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
})