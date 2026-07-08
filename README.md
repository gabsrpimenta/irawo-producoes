# IRAWO Produções

Site institucional da **IRAWO Produções** — produtora audiovisual dedicada a lançamentos musicais, venda de shows e produção executiva, com direção estética afrofuturista.

🔗 Brevemente o o link do Site estara aqui!

---

## 📋 Sobre o projeto

Página única (single page) apresentando a produtora: quem é a fundadora, os pilares institucionais, os serviços oferecidos, o portfólio de trabalhos e os canais de contato direto.

### Seções

- **Hero** — Apresentação inicial com identidade visual afrofuturista
- **Pilares** — Valores institucionais da produtora
- **Sobre** — Conceito da casa, a fundadora (Sabrina Rosa) e o movimento afrofuturista, em abas
- **Serviços** — Ecossistema de atuação: Audiovisual, Palco e Branded Content
- **Portfólio** — Trajetória em tela, com preview visual dos projetos
- **Contato** — Links diretos para WhatsApp, e-mail, Instagram e localização

---

## 🛠️ Tecnologias

- **[React 18](https://react.dev/)** — biblioteca de interface
- **[Vite](https://vitejs.dev/)** — build tool e servidor de desenvolvimento
- **[Tailwind CSS](https://tailwindcss.com/)** — estilização utility-first
- **[Lucide React](https://lucide.dev/)** — ícones
- Imagens otimizadas em **WebP**

---

## 🚀 Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

```bash
# Clone o repositório
git clone https://github.com/gabsrpimenta/irawo-producoes.git

# Entre na pasta do projeto
cd irawo-producoes

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

O site vai abrir em `http://localhost:5173` (ou outra porta, caso essa esteja ocupada).

### Outros comandos disponíveis

```bash
npm run build      # Gera a versão de produção na pasta dist/
npm run preview    # Serve a versão de produção localmente, para testes
```

---

## 📁 Estrutura do projeto

```
src/
├── assets/              # Imagens (fotos, portfólio)
├── components/
│   └── site/            # Componentes de cada seção do site
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Pillars.jsx
│       ├── Services.jsx
│       ├── Feed.jsx
│       ├── About.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── Eyebrow.jsx  # Componente compartilhado de rótulo de seção
├── pages/
│   └── Index.jsx        # Composição das seções na página principal
├── index.css            # Estilos globais e variáveis do design system
└── main.jsx              # Ponto de entrada da aplicação
```

---

## ♿ Acessibilidade e performance

O projeto segue boas práticas de acessibilidade (hierarquia de headings correta, contraste de texto validado, navegação por teclado com foco visível, link de "pular para o conteúdo") e performance (imagens otimizadas em WebP com lazy loading, fontes carregadas sem bloquear a renderização).

---

## 📬 Contato da produtora

- **E-mail:** irawoproducoes@gmail.com
- **Instagram:** [@irawo.prod](https://www.instagram.com/irawo.prod/)
- **Localização:** Vidigal, Rio de Janeiro, Brasil

---

## 👩‍💻 Desenvolvido por

**Gabriella Pimenta** — [LinkedIn](https://www.linkedin.com/in/gabriella-rodrigues-pimenta-7550a22ba/) · [GitHub](https://github.com/gabsrpimenta)
