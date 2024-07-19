import { Request, Response } from "express";
import { Tag } from "../models/tags";

/**
 *Création d'une tag
 *
 * @param Request req - L'objet de la réquete
 * @param Response res - L'objet de la réponse
 * @returns Promise<void>  
 */
export const createTag = async (req: Request, res: Response) => {
  try {
    //On obtient les donnés à partir de la requête
    const { valeur } = req.body;
    //On crée une instance tag à partir du donnés recuperés et on la sauvegarde
    const newTag = await Tag.create({
      valeur,
    });
    res.send(newTag);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};


/**
 *Supprimer une tag
 *
 * @param Request req - L'objet de la réquete
 * @param Response res - L'objet de la réponse
 * @returns Promise<void>  
 */
export const deleteTag = async (req: Request, res: Response) => {
  try {
    //On obtient l'id à partir de l'url
    const { id } = req.params;
    //On supprime le tag qui correspond à l'id obtenu
    await Tag.destroy({
      where: {
        id_tag: id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};
