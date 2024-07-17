import { Table, Model, Column, DataType, BelongsToMany, AllowNull } from "sequelize-typescript";
import { sequelize } from "../database/database";
import { Tag } from "./tags";
import { VideoTag } from "./videotag";

@Table
export class Video extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id_video!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nom!: string;

    @Column({
        type: DataType.TEXT,
    })
    description!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    url!: string;
    
    @Column({
        type: DataType.DATE,
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
    })
    updatedAt!: Date;

    @BelongsToMany (()=> Tag, () =>VideoTag)
    tags!: Tag[];

}
