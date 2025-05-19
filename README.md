# 🌊 Ocean Backend - Maio 2024

Este é um projeto básico de API REST desenvolvido com **Node.js** e **Express.js** durante capacitação prática. A aplicação simula um sistema de gerenciamento de itens utilizando rotas HTTP, manipulando dados em um array local.

---

## 🚀 Funcionalidades

- `GET /oi` – Retorna uma mensagem de saudação
- `GET /item` – Lista todos os itens existentes
- `GET /item/:id` – Retorna um item específico por ID
- `POST /item` – Adiciona um novo item (recebe `{"nome": "NovoItem"}`)
- `PUT /item/:id` – Atualiza um item existente
- `DELETE /item/:id` – Remove um item do array

---

## 🧪 Tecnologias Utilizadas

- Node.js
- Express.js
- JavaScript

---

## ▶️ Como Executar

```bash
# Clone o repositório
git clone https://github.com/kkhalyl/ocean-backend-maio-2024.git

# Acesse o diretório
cd ocean-backend-maio-2024

# Instale as dependências (caso use um package.json)
npm install

# Execute a aplicação
node index.js
