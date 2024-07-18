import express from "express";
import { sequelize } from "./database/database";
import { routes } from "./routes/routes";

async function main() {
  try {
    await sequelize.sync({force: false});
    await sequelize.authenticate();
    console.log("Connection etabli avec success");

    
    const app = express();
    // Middleware para parsear JSON
    app.use(express.json());
    app.use(routes);
    app.listen(3000, () => {
      console.log("Server on port", 3000);
    });
  } catch (error) {
    console.error("Impossible de se connecter à la base de donnés",error);
  }
}

main();