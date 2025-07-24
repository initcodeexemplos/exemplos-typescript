import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "pessoas",
    timestamps: true
})
export default class Pessoa extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nome!: string;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    idade!: number;
}