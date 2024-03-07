import { Request, Response } from "express";
import ArtikelService from "../services/ArtikelService";

export default new (class ArtikelController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const artikel = await ArtikelService.create(data);

      return res.status(200).json(artikel);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const artikels = await ArtikelService.find();

      return res.status(200).json(artikels);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);

      await ArtikelService.delete(id);

      return res.status(200).send("Data berhasil dihapus");
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  }
})();
