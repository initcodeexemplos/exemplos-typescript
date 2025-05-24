import express, { type Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/exercicio1', (req: Request, res: Response) => {
    console.log("MetodoGet", req.query);
    // http://localhost:9090/exercicio1/?num1=10&num2=20
    const num1 = Number(req.query?.num1) || 0
    const num2 = Number(req.query?.num2) || 0

    const resultado = num1 + num2
    res.send(resultado);
});

app.post('/exercicio1', (req: Request, res: Response) => {
    console.log("MetodoPost", req.body);
    // http://localhost:9090/exercicio1/
    // Body - { "num1": 30, "num2": 50 }
    const num1 = req.body?.num1 || 0
    const num2 = req.body?.num2 || 0

    const resultado = num1 + num2
    res.send(resultado);
});

app.listen(9090, () => {
    console.log("Servidor rodando na porta 9090");
})