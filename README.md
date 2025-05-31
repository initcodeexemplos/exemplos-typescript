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

---

├── controllers -> Try Catch, status e send;
├── router -> Métodos Get, Post, Put e Delete;
├── services -> Método em sí e validações (throw);
├── tests -> Testes;
└── index.ts ou app.ts -> Inicialização do sistema.

---

ponto inicial - Index.ts -> routes -> controller/api -> service
                Index.ts <- routes <- controller/api <- service