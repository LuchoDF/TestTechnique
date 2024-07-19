import { Request, Response } from "express";
import { Video } from "../models/videos";

export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await Video.findAll();
    res.send(videos);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const createVideo = async (req: Request, res: Response) => {
  const { nom, description, url } = req.body;
  try {
    const newVideo = await Video.create({
      nom,
      description,
      url,
    });
    res.send(newVideo);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const updateVideo = async (req: Request, res: Response) => {
  try {
    const { nom, description, url } = req.body;
    const { id } = req.params;
    const video = await Video.findByPk(req.params.id);
    if (!video) {
      return res.status(404).json({ error: "Video pas trouvé" });
    }
    await video.update({ nom, description, url });
    res.json(video);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const deleteVideo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Video.destroy({
      where: {
        id_video: id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};
