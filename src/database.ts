import { Sequelize } from "sequelize-typescript";
import Pessoa from "./model/pessoa";
require('dotenv').config()

class Database {
    public db: Sequelize

    constructor() {
        this.db = new Sequelize({
            database: process.env.DB_DATABASE ?? "exemplo",
            host: process.env.DB_HOST ?? "localhost",
            username: process.env.DB_USERNAME ?? "root",
            password: process.env.DB_PASSWORD ?? '',
            port: Number(process.env.DB_PORT) ?? 3306,
            dialect: 'mysql',
            models: [ Pessoa ]
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