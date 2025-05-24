import express, { type Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    console.log("OIE");
    res.send("Tesntado 123");
});

app.listen(9090, () => {
    console.log("Servidor rodando na porta 9090");
})