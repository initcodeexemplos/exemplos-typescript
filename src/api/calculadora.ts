import { type Request, Response } from 'express'
import Calculadora from '../service/calculadora'

const calculadora = new Calculadora()

export default class ApiCalculadora {

    public apiSomar(req: Request, res: Response): void {
        try {
            const num1 = req.body?.num1 || 0
            const num2 = req.body?.num2 || 0
            const result = calculadora.somar(num1, num2)

            res.status(200).json({ result });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

    public apiSub(req: Request, res: Response) {
        try{
            const num1 = req.body?.num1 || 0
            const num2 = req.body?.num2 || 0
            const result = calculadora.sub(num1, num2)

            res.status(200).json({ result });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

    public apiMult(req: Request, res: Response) {
        try {
            const num1 = req.body?.num1 || 0
            const num2 = req.body?.num2 || 0
            const result = calculadora.mult(num1, num2)

            res.status(200).json({ result });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

    public apiDiv(req: Request, res: Response) {
        try{
            const num1 = req.body?.num1 || 0
            const num2 = req.body?.num2 || 0
            const result = calculadora.div(num1, num2)

            res.status(200).json({ result });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

}