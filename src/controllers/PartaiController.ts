import { Request, Response } from "express";
import PartaiService from "../services/PartaiService";

export default new (class PartaiController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const partai = await PartaiService.create(data);

      return res.status(200).json({ message: "Data added success", partai });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const partaiAll = await PartaiService.findAll();

      return res.status(200).json(partaiAll);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }
  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const partai = await PartaiService.findOne(id);

      return res
        .status(200)
        .json({ message: "Get one data partai success", partai });
    } catch (error) {
      throw error;
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { body } = req;
      const partai = await PartaiService.update(body, id);

      return res
        .status(200)
        .json({ message: "Update success", data: { id: id, ...body } });
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
