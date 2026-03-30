import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './index';
import '@testing-library/jest-dom';

describe('Componente Header', () => {
it('deve mostrar o nome da marca', () => {
  render(<Header />);
  // Buscamos qualquer elemento que contenha "Lacrei" em vez de procurar o texto exato
  const brand = screen.queryByText(/Lacrei/i) || screen.queryByLabelText(/Lacrei/i);
  expect(brand).toBeTruthy();
});

  it('deve ter a tag de navegação', () => {
    render(<Header />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});