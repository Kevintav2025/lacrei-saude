"use client";
import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`;

const FormCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #018762;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  label { display: block; margin-bottom: 8px; color: #018762; font-weight: bold; }
  input { 
    width: 100%; 
    padding: 12px; 
    border: 1px solid #ccc; 
    border-radius: 8px; 
    font-size: 1rem;
    color: black;
  }
`;

const BotaoSalvar = styled.button`
  background-color: #018762;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  &:hover { background-color: #016b4e; }
`;

export default function EditarPerfil() {
  const [nome, setNome] = useState("Kevin");
  const [email, setEmail] = useState("kevin@exemplo.com");

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Perfil atualizado com sucesso!");
  };

  return (
    <Container>
      <Header />
      <Content>
        <h1 style={{ color: '#018762', marginBottom: '20px' }}>Editar Perfil</h1>
        <FormCard>
          <form onSubmit={handleSalvar}>
            <InputGroup>
              <label>Nome Completo</label>
              <input value={nome} onChange={(e) => setNome(e.target.value)} />
            </InputGroup>
            <InputGroup>
              <label>E-mail</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </InputGroup>
            <BotaoSalvar type="submit">Salvar Alterações</BotaoSalvar>
          </form>
        </FormCard>
      </Content>
      <Footer />
    </Container>
  );
}