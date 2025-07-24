import { Sequelize } from "sequelize-typescript";
import Pessoa from "./model/pessoa";

class Database {
    public db: Sequelize

    constructor() {
        this.db = new Sequelize({
            database: "exemplo",
            host: "localhost",
            username: "root",
            password: '',
            dialect: 'mysql',
            models: [ Pessoa ],
            port: 3306
        })
    }

    async connect() {
        try {
            await this.db.authenticate()
            console.log("Conexão estabelecida com sucesso.")
            await this.db.sync()
        } catch (error) {
            console.log("Erro ao se conectar com o banco " + error)
        }
    }
}

export default new Database()