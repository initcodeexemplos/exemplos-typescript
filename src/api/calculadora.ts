import { type Request, Response } from 'express'
import { somar, sub, mult, div } from '../service/calculadora';

export function apiSomar(req: Request, res: Response) {
    console.log("entrou na pasta api")
    const num1 = req.body?.num1 || 0
    const num2 = req.body?.num2 || 0
    const result = somar(num1, num2)

    res.status(200).json({ result });
}

export function apiSub(req: Request, res: Response) {
    const num1 = req.body?.num1 || 0
    const num2 = req.body?.num2 || 0
    const result = sub(num1, num2)

    res.status(200).json({ result });
}

export function apiMult(req: Request, res: Response) {
    const num1 = req.body?.num1 || 0
    const num2 = req.body?.num2 || 0
    const result = mult(num1, num2)

    res.status(200).json({ result });
}

export function apiDiv(req: Request, res: Response) {
    const num1 = req.body?.num1 || 0
    const num2 = req.body?.num2 || 0
    const result = div(num1, num2)

    res.status(200).json({ result });
}