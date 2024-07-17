import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Video = sequelize.define("videos", {
  id_videos: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
  },

  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  created: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
