import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';
import '@testing-library/jest-dom';

describe('Página Principal (Home)', () => {
  it('deve renderizar o título principal corretamente', () => {
    render(<Home />);
    const title = screen.getByText(/Cuidamos de você com respeito/i);
    expect(title).toBeInTheDocument();
  });

  it('deve conter o link para buscar profissionais com acessibilidade', () => {
    render(<Home />);
    const link = screen.getByRole('link', { name: /Ir para a página de busca de profissionais de saúde/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/profissionais');
  });
});