import { Request, Response } from "express";
import { Video } from "../models/videos";

export const getVideos = async (req: Request, res: Response) => {
    const videos = await Video.findAll();
    res.send(videos);
}

export const createVideo = async (req: Request, res: Response) => {
    const { nom, description, url} = req.body;
    const newVideo = await Video.create({
        nom,
        description,
        url
    })
    res.send(`Video ajouté: " ${JSON.stringify(newVideo)}`);
}

export const updateVideo = async (req: Request, res: Response) => {
    const {nom, description, url} = req.body;
    const video = await Video.findByPk(req.params.id);
    if(video) {
        await video.update({nom, description, url});
        res.json(video);
    } else {
        res.status(404).json({error: "video pas trouvé"});
    }
}

export const deleteVideo = async (req: Request, res: Response) => {
    
}

