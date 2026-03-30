"use client";
import styled from "styled-components";
import Link from "next/link";

// Definição de cores conforme o Design System
const colors = {
  primary: "#018762",
  primaryHover: "#016b4e",
  text: "#1f1f1f",
  white: "#ffffff",
  bgLight: "rgba(1, 135, 98, 0.05)"
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5rem; /* Aumentado para dar mais "ar" ao layout */
  background-color: ${colors.white};
  border-bottom: 1px solid #eeeeee; /* Borda mais sutil conforme o Marsha */
  box-shadow: 0 2px 4px rgba(0,0,0,0.02); /* Sombra leve para profundidade */
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primary};
  font-size: 1.5rem;
  font-weight: 800; /* Peso extra para o logo */
  letter-spacing: -0.5px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.text};
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: color 0.2s;

  &:hover {
    color: ${colors.primary};
  }

  &.btn-login {
    background-color: ${colors.primary};
    color: ${colors.white};
    border-radius: 8px;
    padding: 0.75rem 2rem;
    transition: background-color 0.2s, transform 0.1s;

    &:hover {
      background-color: ${colors.primaryHover};
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader role="banner">
      <LogoLink href="/" aria-label="Lacrei Saúde - Ir para Home">
        Lacrei Saúde
      </LogoLink>
      
      <Nav aria-label="Menu principal">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/profissionais">Profissionais</NavLink>
        <NavLink href="/dashboard">Dashboard</NavLink>
        <NavLink href="#">Quem Somos</NavLink>
        
        <NavLink 
          href="/login" 
          className="btn-login" 
          aria-label="Entrar na sua conta"
        >
          Entrar
        </NavLink>
      </Nav>
    </StyledHeader>
  );
}