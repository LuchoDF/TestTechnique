import { Request, Response } from "express";
import { Video } from "../models/videos";
import { Tag } from "../models/tags";

/**
 *Ajoute une tag à une vidéo
 *
 * @param Request req - L'objet de la requête
 * @param Response res - L'objet de la réponse
 * @returns Promise<void>  
 */
export const addTagToVideo = async (req: Request, res: Response) => {
  try {
    //On obtient les id vidéo et tag, et on trouve l'instance de chacun avec findByPk
    const video = await Video.findByPk(req.params.id);
    const tag = await Tag.findByPk(req.body.id_tag);
    if (!video || !tag) {
      return res.status(404).json({ error: "Vidéo ou tag pas trouvé" });
    }
    //On ajoute le tag trouvé à la vidéo grace à qu'on' a défini la rélation belongToMany dans le model de la Vidéo
    await video.$add("tags", tag);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

/**
 *Suprimme une tag d'une vidéo
 *
 * @param Request req - L'objet de la requête
 * @param Response res - L'objet de la réponse
 * @returns Promise<void>  
 */
export const removeTagFromVideo = async (req: Request, res: Response) => {
  try {
    //On obtient les id vidéo et tag du paramètres de l'url et on trouve l'instance de chacun avec findByPk
    const video = await Video.findByPk(req.params.id);
    const tag = await Tag.findByPk(req.params.id_tag);
    if (!video || !tag) {
      return res.status(404).json({ error: "Vidéo ou tag pas trouvé" });
    }
    //On suprimme le tag trouvé de la vidéo, grace à qu'on a défini la rélation belongToMany dans le model de la Vidéo
    await video.$remove("tags", tag);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};
