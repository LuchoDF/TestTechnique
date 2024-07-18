import { Router } from "express";
import { getVideos } from "../controllers/videosTags.controller";

export const routes = Router();


routes.get("/videos", getVideos);
routes.post("/videos");
routes.put("/videos/:id");
routes.delete("/videos/:id");
routes.get("/videos/:id");

routes.get("/tags");
routes.post("/tags");
routes.put("/tags/:id");
routes.delete("/tags/:id");
routes.get("/tags/:id");

routes.post("/videos/:id/tags")
routes.delete("/videos/:id/tags/:id")