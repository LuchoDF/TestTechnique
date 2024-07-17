import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { sequelize } from "../database/database";
import { Video } from "./videos";
import { VideoTag } from "./videotag";

@Table
export class Tag extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id_tag!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    valeur!: string;

    

    @BelongsToMany (()=> Video, () =>VideoTag)
    videoss!: Video[];

}

