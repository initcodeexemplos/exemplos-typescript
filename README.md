# Iniciando projeto de TypeScript

Configurando o projeto inicialmente

```bash
npm init
```

Baixou as dependencias de desenvolvimento

```bash
npm install typescript ts-node-dev @types/node --save-dev
```

Configurar nosso projeto TS

```bash
npx tsc --init
```

├── src -> Try Catch, status e send;
|    ├── model -> modelo dos nossos dados;
|    ├── repository -> consultas com nosso banco;
|    ├── controllers -> Try Catch, status e send;
|    ├── router -> Métodos Get, Post, Put e Delete;
|    ├── services -> Método em sí e validações (throw);
|    └── database.ts -> conexão com o banco;
├── tests -> Testes;
└── index.ts ou app.ts -> Inicialização do sistema.

---

ponto inicial - Index.ts -> routes -> controller/api -> service -> model -> repository
                                      controller/api <- service <- model <- repository

# JEST

```bash
npm install --save-dev jest ts-jest @types/jest
npx ts-jest config:init
```

# Sequelize

```bash
npm install sequelize sequelize-typescript mysql2 dotenv
npm install --save-dev @types/sequelize
```

# Relação

Uma pessoa é de um usuário
Um usuário pode ser ou não de uma pessoa

# JWT

```bash
npm install jsonwebtoken
npm install -D @types/jsonwebtoken
```
