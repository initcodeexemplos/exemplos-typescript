import Pessoa from '../model/pessoa'

export default class ServicePessoa {
    async FindById(id: number): Promise<Pessoa | null> {
        return Pessoa.findOne({ where: { id } })
    }

    async FindAll(): Promise<Array<Pessoa>> {
        return Pessoa.findAll();
    }

    async Create(nome: string): Promise<Pessoa> {
        return Pessoa.create({ nome, idade: 15 })
    }

    async Update(id: number, nome: string): Promise<Pessoa> {
        const pessoaAntiga = await this.FindById(id)

        if(!pessoaAntiga) {
            throw new Error("Pessoa não encontrada");
        }
        pessoaAntiga.nome = nome

        return pessoaAntiga.save()
    }

    async Delete(id: number): Promise<void> {
        const pessoaAntiga = await this.FindById(id)

        if(!pessoaAntiga) {
            throw new Error("Pessoa não encontrada")
        }

        pessoaAntiga.destroy()
    }
}
