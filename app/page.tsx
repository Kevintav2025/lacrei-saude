"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Forçamos o branco para ignorar o modo escuro do celular */
  background-color: #ffffff !important;
  color: #000000 !important;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  flex: 1;
  /* GAP cria o afastamento automático entre o título, o texto e o botão */
  gap: 30px; 

  h1 {
    color: #018762 !important;
    font-size: 3rem;
    line-height: 1.2;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    color: #333333 !important;
    line-height: 1.6;
    margin: 0;
  }
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <h1>Cuidamos de você com respeito.</h1>
        
        <p>
          Encontre os melhores profissionais de saúde para a comunidade LGBTQIAPN+.
        </p>

       <Link href="/profissionais" style={{ textDecoration: 'none', border: 'none', outline: 'none', display: 'block' }}>
  <button style={{ 
    padding: '18px 40px', 
    backgroundColor: '#018762', 
    color: 'white', 
    border: 'none', 
    borderRadius: '10px', 
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 12px rgba(1, 135, 98, 0.3)',
    display: 'block',
    margin: '0 auto',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  }}>
    Buscar Profissional
  </button>
  </Link>   
      </Main>
      <Footer />
    </Container>
  );
}