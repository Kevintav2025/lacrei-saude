"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8fafc;
`;

const Content = styled.main`
  flex: 1;
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const Saudar = styled.div`
  margin-bottom: 30px;
  h1 { color: #018762; font-size: 2rem; }
  p { color: #666; font-size: 1.1rem; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const DashCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);

  h3 { color: #018762; margin-bottom: 10px; }
  p { color: #444; margin-bottom: 15px; }
`;

const BotaoAcao = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #018762;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  &:hover { background-color: #016b4e; }
`;

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <Content>
        <Saudar>
          <h1>Olá, Kevin!</h1>
          <p>Bem-vindo à sua área de cuidado e saúde.</p>
        </Saudar>

        <Grid>
          <DashCard>
            <h3>Minhas Consultas</h3>
            <p>Você não possui consultas agendadas para esta semana.</p>
            <BotaoAcao href="/profissionais">Agendar agora</BotaoAcao>
          </DashCard>

          <DashCard>
            <h3>Meu Perfil</h3>
            <p>Mantenha seus dados atualizados para facilitar o atendimento.</p>
            {/* ATUALIZADO: Agora aponta para a página de perfil */}
            <BotaoAcao href="/perfil">Editar Perfil</BotaoAcao>
          </DashCard>

          <DashCard>
            <h3>Dica do Dia</h3>
            <p>A saúde mental é tão importante quanto a física. Tire 10 minutos para você hoje!</p>
          </DashCard>
        </Grid>
      </Content>
      <Footer />
    </Container>
  );
}