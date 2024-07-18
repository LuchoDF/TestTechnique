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
    res.send(`New video added: " ${JSON.stringify(newVideo)}`);
}

