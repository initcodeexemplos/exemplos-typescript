import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "usuarios",
    timestamps: true
})
export default class Usuario extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        // unique: true
    })
    email!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    senha!: string;
}