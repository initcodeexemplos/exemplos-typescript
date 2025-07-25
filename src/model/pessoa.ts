import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Usuario from "./usuario";

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

    @ForeignKey(() => Usuario)
    @Column({
        type: DataType.INTEGER,
        allowNull: true 
    })
    usuarioId?: number

    @BelongsTo(() => Usuario)
    usuario?: Usuario
}