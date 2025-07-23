import Pessoa from '../model/pessoa'

const modelPessoa = new Pessoa();

export default class ServicePessoa {
    FindByIndex(index: number): string {
        return modelPessoa.FindByIndex(index)
    }

    FindAll(): Array<string> {
        return modelPessoa.FindAll();
    }

    Create(nome: string): void {
        modelPessoa.Create(nome)
    }

    Update(index: number, nome: string): void {
        modelPessoa.Update(index, nome)
    }

    Delete(index: number): void {
        modelPessoa.Delete(index)
    }
}
