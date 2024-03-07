import { Request, Response } from "express";
import PaslonService from "../services/PaslonService";

export default new (class PaslonController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const paslon = await PaslonService.create(data);

      return res.status(200).json(paslon);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const paslonAll = await PaslonService.find();

      return res.status(200).json(paslonAll);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);

      await PaslonService.delete(id);

      return res.status(200).send("Data berhasil dihapus");
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  }
})();
