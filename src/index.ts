import express from "express";
import { sequelize } from "./database/database";

async function main() {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    console.log("Connection etabli avec success");

    const app = express();

    app.listen(3000, () => {
      console.log("Server on port", 3000);
    });
  } catch (error) {
    console.error("Impossible de se connecter à la base de donnés",error);
  }
}

main();