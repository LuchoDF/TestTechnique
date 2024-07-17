import { Table, Model, Column,ForeignKey,DataType} from "sequelize-typescript";
import { Video } from "./videos";
import { Tag } from "./tags";

@Table
export class VideoTag extends Model {
    @ForeignKey(() => Video)
    @Column({
        type: DataType.INTEGER,
    })
    id_video!: number;

    @ForeignKey(() => Tag)
    @Column({
        type: DataType.INTEGER,
    })
    id_tag!: number;

}

