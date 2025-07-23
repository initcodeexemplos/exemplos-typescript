import { type Request, Response } from 'express'
import ServicePessoa from '../service/pessoa'

const servicePessoa = new ServicePessoa()

export default class ApiPessoa {

    public FindByIndex(req: Request, res: Response): void {
        try {
            const index = Number(req.params.index) 
            const pessoa = servicePessoa.FindByIndex(index)

            res.status(200).json({ pessoa });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }
    
    public FindAll(req: Request, res: Response): void {
        try {
            const pessoas = servicePessoa.FindAll()

            res.status(200).json({ pessoas });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

    public Create(req: Request, res: Response): void {
        try {
            const nome = req.body?.nome
            servicePessoa.Create(nome)

            res.status(201).json({ msg: "Pessoa cadastrada com sucesso!" });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

    public Update(req: Request, res: Response): void {
        try {
            const index = Number(req.params.index) 
            const nome = req.body?.nome
            servicePessoa.Update(index, nome)

            res.status(200).json({ msg: "Pessoa alterada com sucesso!" });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

    public Delete(req: Request, res: Response): void {
        try {
            const index = Number(req.params.index)
            servicePessoa.Delete(index)

            res.status(204).json({ msg: "Pessoa deletada com sucesso!" });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

}