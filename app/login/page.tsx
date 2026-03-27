"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 40px;
  border: 1px solid #018762;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  background: white;
  h2 { color: #018762; text-align: center; margin-bottom: 30px; font-size: 1.8rem; }
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
  label { display: block; margin-bottom: 8px; color: #444; font-weight: bold; }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
  background-color: #f8fafc;
  color: black;
  &:focus { border-color: #018762; outline: none; background-color: white; }
`;

const BotaoRevelar = styled.button`
  position: absolute;
  right: 15px;
  top: 42px;
  background: none;
  border: none;
  color: #018762;
  cursor: pointer;
  font-weight: bold;
`;

const BotaoEntrar = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #018762;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.2s;
  &:hover { background-color: #016b4e; transform: scale(1.01); }
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [verSenha, setVerSenha] = useState(false);
  
  const router = useRouter(); 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Agora o fluxo está amarrado: Login -> Dashboard
    if (email && senha) {
      router.push("/dashboard"); 
    } else {
      alert("Preencha os dados de acesso!");
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <LoginCard>
          <h2>Acesse sua conta</h2>
          <form onSubmit={handleLogin}>
            <InputGroup>
              <label>E-mail</label>
              <Input 
                type="email" 
                placeholder="seuemail@exemplo.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
              <label>Senha</label>
              <Input 
                type={verSenha ? "text" : "password"} 
                placeholder="Sua senha" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <BotaoRevelar type="button" onClick={() => setVerSenha(!verSenha)}>
                {verSenha ? "Ocultar" : "Mostrar"}
              </BotaoRevelar>
            </InputGroup>

            <BotaoEntrar type="submit">Entrar</BotaoEntrar>
            
            <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
              Esqueceu sua senha? <span style={{ color: '#018762', cursor: 'pointer', fontWeight: 'bold' }}>Clique aqui</span>
            </p>
          </form>
        </LoginCard>
      </Content>
      <Footer />
    </Container>
  );
}