"use client";
import styled from "styled-components";
import Link from "next/link";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: #ffffff;
  border-bottom: 2px solid #018762;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 15px 10px;
    text-align: center;
  }
`;

const Logo = styled.h2`
  color: #018762;
  margin: 0;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; 
  gap: 10px;

  a {
    margin: 5px 10px;
    padding: 10px 15px;
    display: inline-block;
    color: #018762 !important;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.95rem;
    background-color: rgba(1, 135, 98, 0.05); 
    border-radius: 8px;
    transition: all 0.2s;

    &:hover {
      background-color: rgba(1, 135, 98, 0.15);
      transform: translateY(-2px);
    }
  }

  /* Estilo especial para o botão de Login/Entrar */
  .btn-login {
    background-color: #018762;
    color: white !important;
    &:hover {
      background-color: #016b4e;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Lacrei Saúde
        </Link>
      </Logo>
      <Nav>
        <Link href="/">Home</Link>
        <Link href="/profissionais">Profissionais</Link>
        
        {/* NOVO LINK: DASHBOARD */}
        <Link href="/dashboard">Dashboard</Link>
        
        <Link href="#">Quem Somos</Link>

        {/* BOTÃO DE LOGIN PARA FECHAR O FLUXO */}
        <Link href="/login" className="btn-login">Entrar</Link>
      </Nav>
    </StyledHeader>
  );
}