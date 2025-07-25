import { Transaction } from 'sequelize';
import Usuario from '../model/usuario'

export default class ServiceUsuario {
    async FindById(id: number, transaction?: Transaction): Promise<Usuario | null> {
        return Usuario.findOne({ transaction, where: { id } })
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
}
