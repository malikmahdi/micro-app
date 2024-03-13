import { Request, Response } from "express";
import PartaiService from "../services/PartaiService";
import { PartaiValidator } from "../validator/Partai";

export default new (class PartaiController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const { error, value } = PartaiValidator.validate(data);
      const partai = await PartaiService.create(value);

      if (error)
        return res.status(400).json({ message: error.details[0].message });

      return res.status(200).json({ message: "Data added success", partai });
    } catch (error) {
      return res.status(400).json({ message: error });
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
      return res.status(500).json({ message: "Data partai not found!" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { body } = req;
      const { error, value } = PartaiValidator.validate(body);

      if (error)
        return res.status(400).json({ meesage: error.details[0].message });

      await PartaiService.update(value, id);

      return res
        .status(200)
        .json({ message: "Update success", data: { id: id, ...value } });
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
        message: "Data not found!",
      });
    }
  }
})();
