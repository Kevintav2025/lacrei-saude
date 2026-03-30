"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import Link from "next/link";

// Cores do Marsha Design System
const colors = {
  primary: "#018762",
  primaryHover: "#016b4e",
  textPrimary: "#1f1f1f",
  textSecondary: "#515151",
  white: "#ffffff",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colors.white};
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  text-align: center;
  flex: 1;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 20px;
    gap: 24px;
  }
`;

const Title = styled.h1`
  color: ${colors.primary};
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  max-width: 650px;
  color: ${colors.textSecondary};
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 20px 48px;
  border-radius: 12px;
  font-size: 1.25rem;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(1, 135, 98, 0.25);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.primaryHover};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(1, 135, 98, 0.35);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 18px 32px;
  }
`;

export default function Home() {
  return (
    <Container>
      <Header />
      
      <Main role="main">
        <Title>Cuidamos de você com respeito.</Title>
        
        <Description>
          Encontre os melhores profissionais de saúde qualificados para atender a comunidade LGBTQIAPN+ com dignidade.
        </Description>

        <StyledLink 
          href="/profissionais" 
          aria-label="Buscar profissionais de saúde qualificados"
        >
          Buscar Profissional
        </StyledLink> 
      </Main>

      <Footer />
    </Container>
  );
}