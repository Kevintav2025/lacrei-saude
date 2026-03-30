import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';
import '@testing-library/jest-dom';

describe('Página Home', () => {
  it('deve renderizar o título principal', () => {
    render(<Home />);
    // Usamos queryByText para evitar que o teste quebre antes do expect
    const title = screen.queryByText(/Cuidamos/i);
    expect(title).toBeInTheDocument();
  });

  it('deve ter o link para profissionais', () => {
    render(<Home />);
    // Procuramos o link apenas pelo texto contido nele, sem exigir o "name" exato do Role
    const link = screen.queryByText(/Buscar/i);
    expect(link).toBeInTheDocument();
    // Verifica se o link aponta para o lugar certo
    expect(link?.closest('a')).toHaveAttribute('href', '/profissionais');
  });
});