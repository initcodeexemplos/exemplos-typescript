import { type Request, Response } from 'express'
import ServicePessoa from '../service/pessoa'

const servicePessoa = new ServicePessoa()

export default class ApiPessoa {

    public async FindById(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id) 
            const pessoa = await servicePessoa.FindById(id)

            res.status(200).json({ pessoa });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }
    
    public async FindAll(req: Request, res: Response): Promise<void> {
        try {
            const pessoas = await servicePessoa.FindAll()

            res.status(200).json({ pessoas });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

    public async Create(req: Request, res: Response): Promise<void> {
        try {
            const nome = req.body?.nome
            await servicePessoa.Create(nome)

            res.status(201).json({ msg: "Pessoa cadastrada com sucesso!" });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

    public async Update(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id) 
            const nome = req.body?.nome
            await servicePessoa.Update(id, nome)

            res.status(200).json({ msg: "Pessoa alterada com sucesso!" });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

    public async Delete(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id)
            await servicePessoa.Delete(id)

            res.status(204).json({ msg: "Pessoa deletada com sucesso!" });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

}