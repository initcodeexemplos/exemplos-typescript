const banco = new Array("João", "Ana", "Pedro", "Maria")

export default class Pessoa {
    FindByIndex(index: number): string {
        return banco[index]
    }

    FindAll(): Array<string> {
        return banco;
    }

    Create(nome: string): void {
        banco.push(nome)
    }

    Update(index: number, nome: string): void {
        banco[index] = nome;
    }

    Delete(index: number): void {
        banco.splice(index, 1)
    }
}