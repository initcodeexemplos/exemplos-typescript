import { NextFunction, type Request, Response } from 'express'
import ServiceUsuario from '../service/usuario'

export default async function logged(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers['authorization']

        if (!token) {
            throw new Error()
        }

        const service = new ServiceUsuario()
        const usuario = await service.Verify(token)

        req.headers.userId = usuario.id
        req.headers.email = usuario.email
        
        next()
    } catch (error) {
        res.status(400).send({ msg: "Email ou senha inválidos, realize o login novamente." })
    }
}