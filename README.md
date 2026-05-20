# 📚 Biblioteca App

Aplicação web desenvolvida para gerenciamento de biblioteca digital, consumindo a API do projeto `biblioteca-api`.

O sistema permite realizar operações relacionadas ao controle de livros, empréstimos, usuários e autores através de uma interface moderna e responsiva.

---

# 🚀 Tecnologias Utilizadas

## Front-end

- React
- TypeScript
- Vite
- React Router DOM
- Axios

## Estilização

- TailwindCSS
- CSS Modules

## Utilitários

- React Icons
- React Toastify

---

# 📁 Estrutura do Projeto

```bash
src/
├── assets/
├── components/
├── pages/
├── routes/
├── services/
├── styles/
├── types/
├── App.tsx
└── main.tsx
```

---

# ⚙️ Instalação

## 1. Clone o repositório

```bash
git clone https://github.com/f3gomes/biblioteca-app.git
```

---

## 2. Acesse a pasta do projeto

```bash
cd biblioteca-app
```

---

## 3. Instale as dependências

```bash
npm install
```

---

# 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto.

## Exemplo

```env
VITE_API_URL=http://localhost:3333
```

---

# ▶️ Scripts Disponíveis

## Executar em ambiente de desenvolvimento

```bash
npm run dev
```

---

## Gerar build de produção

```bash
npm run build
```

---

## Visualizar build localmente

```bash
npm run preview
```

---

# 🌐 Funcionalidades

- Cadastro de livros
- Cadastro de autores
- Cadastro de usuários
- Controle de empréstimos
- Consulta de registros
- Integração com API REST
- Interface responsiva

---

# 🔗 Integração com API

Este projeto depende da API:

➡️ https://github.com/f3gomes/biblioteca-api

Certifique-se de que a API esteja rodando antes de iniciar o front-end.

---

# 🛠️ Arquitetura

O projeto foi estruturado utilizando separação por responsabilidade, organizando:

- componentes reutilizáveis;
- páginas;
- rotas;
- serviços HTTP;
- tipagens;
- estilos.

Essa organização facilita manutenção, escalabilidade e reutilização de código.

---

# 📦 Dependências Principais

```json
{
  "react": "^18.x",
  "typescript": "^5.x",
  "vite": "^5.x",
  "axios": "^1.x",
  "react-router-dom": "^6.x"
}
```

---

# 📄 Licença

Este projeto está sob a licença ISC.

---

# 👨‍💻 Autor

Desenvolvido por Felipe Gomes.

GitHub:
https://github.com/f3gomes
