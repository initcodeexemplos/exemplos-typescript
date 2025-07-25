import { Transaction } from 'sequelize';
import Pessoa from '../model/pessoa'

export default class ServicePessoa {
    async FindById(id: number, transaction?: Transaction): Promise<Pessoa | null> {
        return Pessoa.findOne({ transaction, where: { id }, include: { association: "usuario" } })
    }

    async FindAll(transaction?: Transaction): Promise<Array<Pessoa>> {
        return Pessoa.findAll({ transaction });
    }

    async Create(nome: string, idade: number, usuarioId?: number, transaction?: Transaction): Promise<Pessoa> {
        return Pessoa.create({ nome, idade, usuarioId }, { transaction })
    }

    async Update(id: number, nome: string, idade: number, transaction?: Transaction): Promise<Pessoa> {
        const pessoaAntiga = await this.FindById(id, transaction)

        if(!pessoaAntiga) {
            throw new Error("Pessoa não encontrada");
        }
        pessoaAntiga.nome = nome
        pessoaAntiga.idade = idade

        return pessoaAntiga.save({ transaction })
    }

    async Delete(id: number, transaction?: Transaction): Promise<void> {
        const pessoaAntiga = await this.FindById(id, transaction)

        if(!pessoaAntiga) {
            throw new Error("Pessoa não encontrada")
        }

        pessoaAntiga.destroy({ transaction })
    }
}
