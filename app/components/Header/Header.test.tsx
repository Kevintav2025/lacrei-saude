import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './index';
import '@testing-library/jest-dom';

describe('Componente Header', () => {
  it('deve renderizar o link da logo com a acessibilidade correta', () => {
    render(<Header />);
    // Verifica se existe um link que tem o label de ir para a Home
    const logoLink = screen.getByRole('link', { name: /Lacrei Saúde - Ir para Home/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('deve ter a tag de navegação com o label correto', () => {
    render(<Header />);
    // O getByRole('navigation') é mais forte que apenas procurar a tag
    const nav = screen.getByRole('navigation', { name: /menu principal/i });
    expect(nav).toBeInTheDocument();
  });

  it('deve exibir o botão de Entrar/Login', () => {
    render(<Header />);
    const loginButton = screen.getByRole('link', { name: /entrar na sua conta/i });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveAttribute('href', '/login');
  });

  it('deve conter uma lista de links no menu', () => {
    render(<Header />);
    // Como adicionamos <ul> e <li>, podemos testar se a lista existe
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });
});