import express from 'express';
import router from './router/calculadora';

const app = express();

app.use(express.json());

app.use(router)

app.listen(9090, () => {
    console.log("Servidor rodando na porta 9090");
})