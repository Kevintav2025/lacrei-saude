"use client";
import { useState } from "react"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff !important;
`;

const Content = styled.main`
  padding: 40px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px; 
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

const Card = styled.div`
  padding: 25px;
  border: 1px solid #018762;
  border-radius: 12px;
  background-color: #ffffff !important;
  color: #2d2d2d !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);

  h3 { color: #018762; margin-bottom: 15px; font-size: 1.4rem; }
  p { margin: 8px 0; color: #444 !important; font-size: 1rem; }
  strong { color: #000 !important; }
`;

const FormAgendamento = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  padding: 20px;
  background-color: #f0fdf4;
  border-radius: 8px;
  border: 1px solid #018762;
`;

const Input = styled.input`
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px; 
  background-color: white !important;
  color: black !important;
`;

export default function Profissionais() {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [concluido, setConcluido] = useState(false);

  const handleEnviar = (e: React.FormEvent) => {
    e.preventDefault();
    setConcluido(true); 
  };

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h1 style={{ color: '#018762', fontSize: '1.8rem', marginBottom: '10px' }}>Nossos Profissionais</h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Encontre atendimento acolhedor e especializado.</p>
        </div>
        
        <Card>
          <h3>Dr. João Silva</h3>
          <p><strong>Especialidade:</strong> Psicologia</p>
          <p><strong>Local:</strong> São Paulo - SP</p>

          {!mostrarForm && !concluido && (
            <button 
              type="button"
              /* Usei onPointerDown para ser instantâneo no celular */
              onPointerDown={() => setMostrarForm(true)}
              onClick={() => setMostrarForm(true)}
              style={{ 
                marginTop: '20px',
                width: '100%',
                padding: '16px', 
                backgroundColor: '#018762', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                cursor: 'pointer', 
                fontWeight: 'bold',
                fontSize: '1.1rem',
                touchAction: 'manipulation'
              }}
            >
              Agendar Consulta
            </button>
          )}

          {mostrarForm && !concluido && (
            <FormAgendamento onSubmit={handleEnviar}>
              <h4 style={{ margin: '0 0 10px 0', color: '#018762' }}>Dados do Agendamento</h4>
              <Input type="text" placeholder="Seu nome completo" required />
              <Input type="email" placeholder="Seu e-mail" required />
              <Input type="date" required />
              <button 
                type="submit"
                style={{ 
                  padding: '15px', 
                  backgroundColor: '#018762', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px', 
                  cursor: 'pointer', 
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  marginTop: '10px'
                }}
              >
                Confirmar Agendamento
              </button>
            </FormAgendamento>
          )}

          {concluido && (
            <div style={{ 
              marginTop: '20px', 
              padding: '20px', 
              backgroundColor: '#dcfce7', 
              color: '#166534', 
              borderRadius: '8px', 
              textAlign: 'center', 
              fontWeight: 'bold',
              border: '1px solid #166534'
            }}>
              ✅ Agendamento concluído com sucesso!
            </div>
          )}
        </Card>
      </Content>
      <Footer />
    </Container>
  );
}