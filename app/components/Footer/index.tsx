"use client";
import styled from "styled-components";
import Link from "next/link";

// 1. Cores oficiais do Marsha Design System
const colors = {
  primary: "#018762", // Verde Lacrei
  textSecondary: "#515151", // Cinza médio para textos secundários
  border: "#b3e6d9", // Verde claro para bordas discretas
  white: "#ffffff"
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px; /* Aumentado para melhor respiro */
  background-color: ${colors.white};
  border-top: 1px solid ${colors.border};
  margin-top: auto;
  width: 100%;
  box-sizing: border-box;

  /* Ajuste para telas muito pequenas */
  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 32px; /* Espaçamento mais fiel ao design moderno */
  margin-bottom: 24px;
  flex-wrap: wrap; 
  justify-content: center;

  a {
    text-decoration: none;
    color: ${colors.primary};
    font-weight: 700; /* Marsha costuma usar pesos mais fortes para links */
    font-size: 1rem;
    transition: opacity 0.2s ease-in-out;
    
    &:hover {
      text-decoration: underline;
      opacity: 0.7;
    }

    &:focus {
      outline: 2px solid ${colors.primary};
      outline-offset: 4px;
    }
  }

  @media (max-width: 480px) {
    gap: 20px;
    flex-direction: column; /* Links em coluna no mobile facilitam o clique */
    align-items: center;
  }
`;

const Copyright = styled.p`
  color: ${colors.textSecondary};
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
  line-height: 1.5;
`;

export default function Footer() {
  return (
    <StyledFooter role="contentinfo">
      <FooterNav aria-label="Navegação secundária do rodapé">
        <Link href="/" aria-label="Ir para a página inicial">
          Home
        </Link>
        <Link href="/profissionais" aria-label="Ver profissionais de saúde">
          Profissionais
        </Link>
        <Link href="#" aria-label="Saber mais sobre a Lacrei Saúde">
          Quem Somos
        </Link>
      </FooterNav>
      
      <Copyright>
        Lacrei Saúde © {new Date().getFullYear()}. Todos os direitos reservados.
      </Copyright>
    </StyledFooter>
  );
}