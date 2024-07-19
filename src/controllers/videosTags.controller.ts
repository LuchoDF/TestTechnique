import { Request, Response } from "express";
import { Video } from "../models/videos";
import { Tag } from "../models/tags";
import { VideoTag } from "../models/videotag";

export const addTagToVideo = async (req: Request, res: Response) => {
  try {
    const video = await Video.findByPk(req.params.id);
    const tag = await Tag.findByPk(req.body.id_tag);
    if (!video || !tag) {
      return res.status(404).json({ error: "Video ou tag pas trouvé" });
    }
    await video.$add("tags", tag);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const removeTagFromVideo = async (req: Request, res: Response) => {
  try {
    const video = await Video.findByPk(req.params.id);
    const tag = await Tag.findByPk(req.params.id_tag);
    if (!video || !tag) {
      return res.status(404).json({ error: "Video ou tag pas trouvé" });
    }
    await video.$remove("tags", tag);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};