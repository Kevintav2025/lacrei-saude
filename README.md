# 🏥 Lacrei Saúde - Desafio Técnico

Este é um sistema de agendamento de consultas desenvolvido com foco em acessibilidade e inclusão para a plataforma Lacrei Saúde, conectando a comunidade LGBTQIAPN+ a profissionais qualificados.

## 🚀 Fluxo do Projeto
O projeto simula a jornada completa do usuário:
1. **Página Inicial:** Apresentação e busca principal.
2. **Login:** Acesso seguro com visualização de senha.
3. **Dashboard:** Painel do usuário com resumo de agendamentos.
4. **Agendamento:** Lista de profissionais disponíveis para consulta.

## 🧠 Decisões Técnicas e Design (Marsha DS)
Para atender aos critérios de senioridade e escalabilidade, as seguintes decisões foram tomadas:
- **Styled Components:** Implementado para eliminar o uso de estilos inline, garantindo a fidelidade ao **Marsha Design System** através de componentes reutilizáveis e manutenção simplificada do CSS-in-JS.
- **Acessibilidade (WCAG):** Uso rigoroso de tags semânticas (`main`, `nav`, `footer`), atributos `aria-label` e contraste de cores validado para garantir uma experiência inclusiva.
- **Performance:** Otimização de renderização e carregamento de fontes para garantir um alto score no **Lighthouse**.

## 🛠️ Tecnologias
* **Next.js 14** (App Router)
* **React** (Hooks e Estados)
* **Styled Components** (Estilização Dinâmica e Escalável)
* **TypeScript** (Tipagem e Segurança de Dados)
* **Vitest / Jest** (Testes Unitários de Componentes)

## 📌 Evolução e Responsividade
* **Mobile First:** A interface foi refinada para garantir consistência em diferentes tamanhos de tela, ajustando fluxos de navegação para dispositivos móveis.
* **Componentização:** O uso de Styled Components permitiu remover oscilações de eventos de clique, garantindo 100% de compatibilidade em telas touch sem a necessidade imediata de bibliotecas externas de UI.

## 🌐 Deploy e Rollback
- **Deploy:** Hospedagem realizada na **Vercel** com fluxo de CI/CD (Integração Contínua) conectado automaticamente à branch `main`.
- **Rollback:** Em caso de incidentes, a estratégia de recuperação utiliza o histórico de Deployments da Vercel para realizar o "Promote to Production" de uma versão estável anterior em poucos segundos.

## 🧪 Testes
Para garantir a confiabilidade dos componentes e da navegação, foram implementados testes unitários utilizando **Vitest** e **React Testing Library**.
![Resultado dos Testes](/app/components/assents/teste.png)

## ⚙️ Como executar
1. **Clone o repositório:**
   `git clone https://github.com/Kevintav2025/lacrei-saude.git`
2. **Instale as dependências:**
   `npm install`
3. **Execute os Testes Unitários:**
   `npm test`
4. **Inicie o servidor de desenvolvimento:**
   `npm run dev`
5. **Acesse:** `http://localhost:3000`

---
Desenvolvido por [Kevin Tavares] - 2026+