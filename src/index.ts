import express from 'express';
import router from './router/pessoa';
import database from './database';

const app = express();

app.use(express.json());

app.use('/api/v1', router)

app.listen(9090, async () => {
    await database.connect();
    console.log("Servidor rodando na porta 9090");
})