import { Router } from "express";
import { getVideos, createVideo, updateVideo, deleteVideo } from "../controllers/videos.controller";
import { createTag, deleteTag } from "../controllers/tags.controller";
import { addTagToVideo, removeTagFromVideo } from "../controllers/videosTags.controller";

export const routes = Router();


routes.get("/videos", getVideos);
routes.post("/videos", createVideo);
routes.put("/videos/:id",updateVideo);
routes.delete("/videos/:id",deleteVideo);

routes.post("/tags", createTag);
routes.delete("/tags/:id",deleteTag);


routes.post("/videostags/:id",addTagToVideo);
routes.delete("/videostags/:id/tags/:id_tag",removeTagFromVideo)