import express from 'express';
import { apiDiv, apiMult, apiSomar, apiSub } from './api/calculadora';

const app = express();

app.use(express.json());

app.post('/somar', apiSomar);
app.post('/sub', apiSub);
app.post('/mult', apiMult);
app.post('/div', apiDiv);

app.listen(9090, () => {
    console.log("Servidor rodando na porta 9090");
})