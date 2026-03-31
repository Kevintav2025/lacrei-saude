import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './index';
import '@testing-library/jest-dom';

describe('Componente Footer', () => {
  it('deve exibir o texto de copyright corretamente', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(new RegExp(`Lacrei Saúde © ${currentYear}`, 'i'));
    expect(copyright).toBeInTheDocument();
  });

  it('deve conter links para redes sociais ou navegação', () => {
    render(<Footer />);
    // Verifica se existe o link de "Quem Somos" ou similar no rodapé
    const link = screen.getByText(/Quem Somos/i);
    expect(link).toBeInTheDocument();
  });
});