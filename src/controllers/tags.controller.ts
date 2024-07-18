import { Request, Response } from "express";
import { Tag } from "../models/tags";

export const createTag = async (req: Request, res: Response) => {
    const { valeur } = req.body;
    try {
      const newTag = await Tag.create({
        valeur,
      });
      res.send(newTag);
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  };

  export const deleteTag = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
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