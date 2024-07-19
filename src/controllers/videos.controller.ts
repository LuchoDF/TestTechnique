import { Request, Response } from "express";
import { Video } from "../models/videos";

/**
 *Obtien les vidéos
 *
 * @param Request 
 * @param Response res - L'objet de la réponse
 * @returns Promise<void>  
 */
export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await Video.findAll();
    res.send(videos);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};



/**
 *Création d'une vidéo
 *
 * @param Request req - L'objet de la requête
 * @param Response res - L'objet de la réponse
 * @returns Promise<void>  
 */
export const createVideo = async (req: Request, res: Response) => {
  //On obtient les donnés à partir de la requête
  const { nom, description, url } = req.body;
  try {
    //On crée une instance vidéo à partir du donnés recuperés et on la sauvegarde
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



/**
 *Actualiser une vidéo
 *
 * @param Request req - L'objet de la requête
 * @param Response res - L'objet de la réponse
 * @returns Promise<void>  
 */
export const updateVideo = async (req: Request, res: Response) => {
  try {
    //On obtient les donnés à partir de la requête
    const { nom, description, url } = req.body;
    //On obtient l'id de la vidéo à partir de l'url
    const { id } = req.params;
    //On crée une instance du vidéo trouvé à partir de l'id
    const video = await Video.findByPk(id);
    if (!video) {
      return res.status(404).json({ error: "Video pas trouvé" });
    }
    //On modifie l'instance à partir des donnés recuperés
    await video.update({ nom, description, url });
    res.json(video);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};



/**
 *Supprimer une vidéo
 *
 * @param Request req - L'objet de la requête
 * @param Response res - L'objet de la réponse
 * @returns Promise<void>  
 */
export const deleteVideo = async (req: Request, res: Response) => {
  try {
    //On obtient l'id de la vidéo à partir de l'url
    const { id } = req.params;
    //On supprime la vidéo qui match l'id obtenu
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
