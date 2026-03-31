# 🏥 Lacrei Saúde - Desafio Técnico

Este é um sistema de agendamento de consultas desenvolvido com foco em acessibilidade e inclusão para a plataforma Lacrei Saúde, conectando a comunidade LGBTQIAPN+ a profissionais qualificados.

## 🚀 Fluxo do Projeto+
O projeto simula a jornada completa do usuário:
1. **Página Inicial:** Apresentação e busca principal.
2. **Login:** Interface de acesso seguro.
3. **Dashboard:** Painel do usuário com resumo de agendamentos.
4. **Agendamento:** Lista de profissionais disponíveis para consulta.

## ♿ Acessibilidade e Semântica (WCAG)
Item central do desafio, a aplicação foi refinada para garantir uma experiência inclusiva:
- **Idioma:** Configuração de `lang="pt-BR"` no RootLayout para correta interpretação por leitores de tela.
- **Navegação por Teclado:** Implementação de gerenciamento de foco visível (`outline`) em todos os elementos interativos (links e botões).
- **Tags Semânticas:** Uso rigoroso de `main`, `nav`, `footer`, `ul` e `li` para uma estrutura de dados compreensível.
- **Aria-labels:** Atributos descritivos em links de navegação e botões de ação.

## 🧠 Decisões Técnicas e Design (Marsha DS)
Para atender aos critérios de senioridade e escalabilidade:
- **Styled Components:** Utilizado para eliminar estilos inline, garantindo fidelidade ao **Marsha Design System** e centralização de cores e tokens.
- **Performance:** Otimização de renderização e carregamento de fontes validada via **Lighthouse** (evidências na pasta `/docs`).

## 🛠️ Tecnologias
* **Next.js 15** (App Router)
* **React** (Hooks e Estados)
* **Styled Components** (Estilização Dinâmica e Escalável)
* **TypeScript** (Tipagem e Segurança)
* **Vitest / Testing Library** (Testes Unitários)

## 🌐 Deploy e Rollback
- **Deploy:** Hospedagem na **Vercel** com fluxo de CI/CD conectado à branch `main`.
- **Rollback:** Em caso de incidentes em produção, a estratégia de recuperação utiliza o **Instant Rollback** da Vercel, permitindo reverter para a versão estável anterior em segundos através do histórico de Deployments.

## 🧪 Testes Unitários
Para garantir a confiabilidade, foram implementados testes unitários cobrindo os 3 componentes base solicitados:
1. **Header:** Validação de links, logo e acessibilidade do menu.
2. **Home (Page):** Verificação de renderização e navegação principal.
3. **Footer:** Validação de semântica e informações institucionais.

**Status:** 8 testes passados com sucesso.
![Resultado dos Testes](/app/components/assents/teste1.png)
## 📊 Evidências de Qualidade (Lighthouse)

A aplicação foi auditada pelo Lighthouse, atingindo notas máximas em Acessibilidade, SEO e Performance, garantindo uma experiência fluida e inclusiva.

![Resultado Lighthouse](/app/components/assents/lighthouse.png)

## ⚙️ Como executar
1. **Clone o repositório:**
   `git clone https://github.com/Kevintav2025/lacrei-saude.git`
2. **Instale as dependências:**
   `npm install`
3. **Execute os Testes:**
   `npm test`
4. **Inicie o servidor:**
   `npm run dev`

---
Desenvolvido por **Kevin Tavares** - 2026