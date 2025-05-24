import express, { type Request, Response } from 'express';
import { div, mult, somar, sub } from './exercicio/calculadora';

const app = express();

app.use(express.json());

app.post('/somar', (req: Request, res: Response) => {
    const num1 = req.body?.num1 || 0
    const num2 = req.body?.num2 || 0

    res.send(somar(num1, num2));
});

app.post('/sub', (req: Request, res: Response) => {
    const num1 = req.body?.num1 || 0
    const num2 = req.body?.num2 || 0

    res.send(sub(num1, num2));
});

app.post('/mult', (req: Request, res: Response) => {
    const num1 = req.body?.num1 || 0
    const num2 = req.body?.num2 || 0

    res.send(mult(num1, num2));
});

app.post('/div', (req: Request, res: Response) => {
    const num1 = req.body?.num1 || 0
    const num2 = req.body?.num2 || 0

    res.send(div(num1, num2));
});

app.listen(9090, () => {
    console.log("Servidor rodando na porta 9090");
})