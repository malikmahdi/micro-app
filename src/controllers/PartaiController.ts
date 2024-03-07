import { Request, Response } from "express";
import PartaiService from "../services/PartaiService";

export default new (class PartaiController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const partai = await PartaiService.create(data);

      return res.status(200).json(partai);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const partaiAll = await PartaiService.find();

      return res.status(200).json(partaiAll);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);

      await PartaiService.delete(id);

      return res.status(200).send("Data berhasil dihapus");
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  }
})();
