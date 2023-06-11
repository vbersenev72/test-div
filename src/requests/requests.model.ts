
import { Column, DataType, Table, Model } from "sequelize-typescript";


interface RequestCreationAttrs {
    name: string,
    email: string,
    status: string,
    message: string,
    comment: string
}

@Table({tableName: 'requests'})
export class Request extends Model<Request, RequestCreationAttrs> {

    @Column({type: DataType.NUMBER, unique: true, primaryKey: true, autoIncrement: true})
    id: number

    @Column({type: DataType.STRING, allowNull: true})
    name: string

    @Column({type: DataType.STRING, allowNull: true})
    email: string

    @Column({type: DataType.STRING, allowNull: true})
    status: string

    @Column({type: DataType.STRING, allowNull: true})
    message: string

    @Column({type: DataType.STRING, allowNull: true})
    comment: string

    @Column({type: DataType.STRING, allowNull: true})
    created_at: string

    @Column({type: DataType.STRING, allowNull: true})
    updated_at: string

}