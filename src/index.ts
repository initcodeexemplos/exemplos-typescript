import express from 'express';
import routerPessoa from './router/pessoa';
import routerUsuario from './router/usuario';
import database from './database';

const app = express();

app.use(express.json());

app.use('/api/v1', routerPessoa)
app.use('/api/v1', routerUsuario)

app.listen(9090, async () => {
    await database.connect();
    console.log("Servidor rodando na porta 9090");
})