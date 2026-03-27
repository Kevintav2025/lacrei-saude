import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from './index'
import '@testing-library/jest-dom'

describe('Componente Header', () => {
  it('deve mostrar o nome da Lacrei Saúde', () => {
    render(<Header />)
    expect(screen.getByText(/Lacrei Saúde/i)).toBeInTheDocument()
  })
})