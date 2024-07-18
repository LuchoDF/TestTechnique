import { Router } from "express";
import { getVideos, createVideo, updateVideo, deleteVideo } from "../controllers/videos.controller";

export const routes = Router();


routes.get("/videos", getVideos);
routes.post("/videos", createVideo);
routes.put("/videos/:id",updateVideo);
routes.delete("/videos/:id",deleteVideo);
routes.get("/videos/:id");

routes.get("/tags");
routes.post("/tags");
routes.put("/tags/:id");
routes.delete("/tags/:id");
routes.get("/tags/:id");

routes.post("/videos/:id/tags")
routes.delete("/videos/:id/tags/:id")