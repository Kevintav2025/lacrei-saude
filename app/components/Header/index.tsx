"use client";
import styled from "styled-components";
import Link from "next/link";

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
  padding: 1rem 5rem;
  background-color: ${colors.white};
  border-bottom: 1px solid #eeeeee;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
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
  font-weight: 800;
  letter-spacing: -0.5px;
  outline: none;
  
  &:focus {
    box-shadow: 0 0 0 3px ${colors.primary}44;
    border-radius: 4px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Nav = styled.nav`
  /* Ajustado para lista para melhor semântica */
  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.text};
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s;
  border-radius: 8px;

  &:hover {
    color: ${colors.primary};
    background-color: ${colors.bgLight};
  }

  &:focus {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }

  &.btn-login {
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 0.75rem 2rem;

    &:hover {
      background-color: ${colors.primaryHover};
      transform: scale(1.02);
      color: ${colors.white};
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
        <ul>
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/profissionais">Profissionais</NavLink></li>
          <li><NavLink href="/dashboard">Dashboard</NavLink></li>
          <li><NavLink href="/quem-somos">Quem Somos</NavLink></li>
          <li>
            <NavLink 
              href="/login" 
              className="btn-login" 
              aria-label="Entrar na sua conta"
            >
              Entrar
            </NavLink>
          </li>
        </ul>
      </Nav>
    </StyledHeader>
  );
}