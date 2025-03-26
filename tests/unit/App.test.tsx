import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../../src/App'

describe('App', () => {
  it('renders the hexagon grid', () => {
    render(<App />)
    const hexagonContainer = screen.getByTestId('hexagon-container')
    expect(hexagonContainer).toBeInTheDocument()
  })
}) 