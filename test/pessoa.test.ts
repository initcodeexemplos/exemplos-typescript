import { Transaction } from "sequelize"
import database from "../src/database"
import Pessoa from "../src/model/pessoa"
import ServicePessoa from "../src/service/pessoa"

describe("Realizar CRUD de Pessoa", () => {
    const service = new ServicePessoa()
    let transaction: Transaction
    let id: number

    beforeAll(async () => {
        await database.connect()
        await Pessoa.sync()
        transaction = await database.db.transaction()
    })

    afterAll(async () => {
        transaction.rollback()
        await database.db.close()
    })

    it("Criar uma Pessoa", async () => {
        const pessoa = await service.Create("João", 40, transaction)
        id = pessoa.id

        expect(pessoa.nome).toBe("João")
        expect(pessoa.idade).toBe(40)
    })

    it("Alterar uma Pessoa", async () => {
        const pessoa = await service.Update(id, "Ana", 30, transaction)

        expect(pessoa.nome).toBe("Ana")
        expect(pessoa.idade).toBe(30)
    })

    it("Listar uma Pessoa", async () => {
        const pessoa = await service.FindById(id, transaction)

        expect(pessoa?.nome).toBe("Ana")
    })

    it("Listar Pessoas", async () => {
        const pessoas = await service.FindAll(transaction)
        const pessoa = pessoas.find(pessoa => pessoa.id == id)

        expect(pessoa?.nome).toBe("Ana")
    })

    it("Deletar uma Pessoa", async () => {
        const pessoaAntes = await service.FindById(id, transaction)
        await service.Delete(id, transaction)
        const pessoaDepois = await service.FindById(id, transaction)

        expect(pessoaAntes?.nome).not.toBe(pessoaDepois?.nome)
    })

})