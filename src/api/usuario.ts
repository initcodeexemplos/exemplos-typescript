import { type Request, Response } from 'express'
import ServiceUsuario from '../service/usuario'

const serviceUsuario = new ServiceUsuario()

export default class ApiUsuario {

    public async FindById(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id) 
            const usuario = await serviceUsuario.FindById(id)

            res.status(200).json({ usuario });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }
    
    public async FindAll(req: Request, res: Response): Promise<void> {
        try {
            const usuarios = await serviceUsuario.FindAll()

            res.status(200).json({ usuarios });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

    public async Create(req: Request, res: Response): Promise<void> {
        try {
            const { email, senha } = req.body
            await serviceUsuario.Create(email, senha)

            res.status(201).json({ msg: "Usuario cadastrada com sucesso!" });
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
            const { email, senha } = req.body
            await serviceUsuario.Update(id, email, senha)

            res.status(200).json({ msg: "Usuario alterada com sucesso!" });
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
            await serviceUsuario.Delete(id)

            res.status(204).json({ msg: "Usuario deletada com sucesso!" });
        } catch (error) {
            const err = error instanceof Error
                ? error
                : new Error(String(error))

            res.status(500).json({ msg: err.message });
        }
    }

}