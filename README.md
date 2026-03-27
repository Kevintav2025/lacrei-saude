# 🏥 Lacrei Saúde - Desafio Técnico

Este é um sistema de agendamento de consultas desenvolvido com foco em acessibilidade e inclusão para a plataforma Lacrei Saúde.

## 🚀 Fluxo do Projeto
O projeto simula a jornada completa do usuário:
1. **Página Inicial:** Apresentação e busca.
2. **Login:** Acesso seguro com visualização de senha.
3. **Dashboard:** Painel do usuário com resumo de agendamentos.
4. **Agendamento:** Lista de profissionais disponíveis para consulta.

## 🛠️ Tecnologias
* **Next.js 14** (App Router)
* **React** (Hooks e Estados)
* **Styled Components** (Estilização Dinâmica)
* **TypeScript** (Tipagem e Segurança)

## 📌 Observações de Desenvolvimento
* **Foco em Desktop:** O projeto foi otimizado para navegadores Desktop. 
* **Responsividade:** Identifiquei que em alguns dispositivos móveis os eventos de clique podem oscilar. Em um ambiente de produção real, eu utilizaria bibliotecas como **Radix UI** ou **Headless UI** para garantir 100% de compatibilidade em telas touch.

## ⚙️ Como executar
1. Clone o repositório:
   `git clone https://github.com/Kevintav2025/lacrei-saude.git`
2. Instale as dependências:
   `npm install`
3. Inicie o servidor:
   `npm run dev`
4. Acesse: `http://localhost:3000`