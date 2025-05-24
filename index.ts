import express, { type Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    console.log(req.query);
    // http://localhost:9090/?num1=10&num2=20
    res.send("Exemplo Query");
});

app.get('/api/:id/:parametros', (req: Request, res: Response) => {
    // http://localhost:9090/api/id/parametros
    console.log(req.params);
    res.send("Exemplo Route");
});

app.listen(9090, () => {
    console.log("Servidor rodando na porta 9090");
})