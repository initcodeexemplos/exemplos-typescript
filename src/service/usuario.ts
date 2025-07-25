import { Transaction } from 'sequelize';
import Usuario from '../model/usuario'
import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET ?? 'secredo'

export default class ServiceUsuario {
    async FindById(id: number, transaction?: Transaction): Promise<Usuario | null> {
        return Usuario.findOne({ transaction, where: { id } })
    }

    async FindByEmail(email: string): Promise<Usuario | null> {
        return Usuario.findOne({ where: { email } })
    }

    async FindAll(transaction?: Transaction): Promise<Array<Usuario>> {
        return Usuario.findAll({ transaction });
    }

    async Create(email: string, senha: string, transaction?: Transaction): Promise<Usuario> {
        return Usuario.create({ email, senha }, { transaction })
    }

    async Update(id: number, email: string, senha: string, transaction?: Transaction): Promise<Usuario> {
        const usuarioAntigo = await this.FindById(id, transaction)

        if(!usuarioAntigo) {
            throw new Error("Usuario não encontrado");
        }
        usuarioAntigo.email = email
        usuarioAntigo.senha = senha

        return usuarioAntigo.save({ transaction })
    }

    async Delete(id: number, transaction?: Transaction): Promise<void> {
        const usuarioAntigo = await this.FindById(id, transaction)

        if(!usuarioAntigo) {
            throw new Error("Usuario não encontrado")
        }

        usuarioAntigo.destroy({ transaction })
    }

    async Login(email: string, senha: string): Promise<string> {
        const usuario = await this.FindByEmail(email)

        if (!usuario || usuario.senha !== senha) {
            throw new Error("Email ou senha inválidos.")
        }

        const token = jwt.sign({ id: usuario.id, email: usuario.email }, secretKey, { expiresIn: "1h" })

        return token
    }

    async Verify(token: string): Promise<Usuario> {
        const decoded = jwt.verify(token, secretKey)
        // decoded == { id: 1, email: 'teste@teste.com', iat: 1753461087, exp: 1753464687 }

        if (
            typeof decoded === 'object'
            && 'id' in decoded
            && 'email' in decoded
        ) {
            const usuario = await Usuario.findOne({ where: { id: decoded.id, email: decoded.email } }) 
            
            if(!usuario) {
                throw new Error("Email ou senha inválidos.")
            }

            return usuario
        }

        throw new Error("Email ou senha inválidos.")
    }
}
