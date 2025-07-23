import express from 'express';
import router from './router/pessoa';

const app = express();

app.use(express.json());

app.use('/api/v1', router)

app.listen(9090, () => {
    console.log("Servidor rodando na porta 9090");
})