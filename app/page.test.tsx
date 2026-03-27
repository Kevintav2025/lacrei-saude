import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from './page'
import '@testing-library/jest-dom'

// Mock do Next/Link para não dar erro no teste
import { vi } from 'vitest'
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode, href: string }) => <a href={href}>{children}</a>
}))

describe('Página Home', () => {
  it('deve renderizar a frase principal', () => {
    render(<Home />)
    expect(screen.getByText(/Cuidamos de você com respeito/i)).toBeInTheDocument()
  })

  it('deve ter o botão de buscar profissional', () => {
    render(<Home />)
    const botao = screen.getByRole('button', { name: /Buscar Profissional/i })
    expect(botao).toBeInTheDocument()
  })
})