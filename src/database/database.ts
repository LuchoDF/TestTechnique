import { Sequelize } from "sequelize-typescript";
import { Video } from "../models/videos";
import { Tag } from "../models/tags";
import { VideoTag } from "../models/videotag";

export const sequelize: Sequelize = new Sequelize({
  database: 'videostags',
  dialect: 'postgres',
  username: 'postgres',
  password: 'mypassword',
  models: [Video, Tag, VideoTag],
});

