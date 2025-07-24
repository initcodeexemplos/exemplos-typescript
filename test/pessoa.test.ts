import database from "../src/database"
import Pessoa from "../src/model/pessoa"
import ServicePessoa from "../src/service/pessoa"

describe("Realizar CRUD de Pessoa", () => {
    const service = new ServicePessoa()

    beforeAll(async () => {
        await database.connect()
        await Pessoa.sync({ force: true })
    })

    afterAll(async () => {
        await database.db.close()
    })

    it("Criar uma Pessoa", async () => {
        const pessoa = await service.Create("João")

        expect(pessoa.nome).toBe("João")
    })

    it("Alterar uma Pessoa", async () => {
        const pessoa = await service.Update(1, "Ana")

        expect(pessoa.nome).toBe("Ana")
    })

    it("Listar uma Pessoa", async () => {
        const pessoa = await service.FindById(1)

        expect(pessoa?.nome).toBe("Ana")
    })

    it("Listar Pessoas", async () => {
        const pessoa = await service.FindAll()

        expect(pessoa[0].nome).toBe("Ana")
    })

    it("Deletar uma Pessoa", async () => {
        const pessoaAntes = await service.FindById(1)
        console.log('pessoaAntes', pessoaAntes)
        await service.Delete(1)
        const pessoaDepois = await service.FindById(1)
        console.log('pessoaDepois',pessoaDepois)

        expect(pessoaAntes?.nome).not.toBe(pessoaDepois?.nome)
    })

})