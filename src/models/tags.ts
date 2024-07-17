import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Tag = sequelize.define("tags", {
  id_tags: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  valeur: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
