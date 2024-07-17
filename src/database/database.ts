import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("videostags", "postgres", "mypassword", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;