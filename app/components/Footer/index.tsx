"use client";
import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  background-color: #ffffff;
  border-top: 1px solid #018762;
  margin-top: auto; /* Garante que o footer fique sempre no fim da página */
  width: 100%;
  box-sizing: border-box;
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 25px; /* Espaço entre os links */
  margin-bottom: 15px;
  flex-wrap: wrap; /* Para não quebrar no celular */
  justify-content: center;

  a {
    text-decoration: none;
    color: #018762;
    font-weight: 600;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.p`
  color: #666;
  font-size: 0.8rem;
  margin: 0;
  text-align: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterNav>
        <Link href="/">Home</Link>
        <Link href="/profissionais">Profissionais</Link>
        <Link href="#">Quem Somos</Link>
      </FooterNav>
      <Copyright>
        Lacrei Saúde © 2026. Todos os direitos reservados.
      </Copyright>
    </StyledFooter>
  );
}