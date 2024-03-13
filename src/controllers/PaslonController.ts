import { Request, Response } from "express";
import PaslonService from "../services/PaslonService";
import { PaslonValidator } from "../validator/Paslon";

export default new (class PaslonController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const { error, value } = PaslonValidator.validate(data);
      const paslon = await PaslonService.create(value);

      if (error)
        return res.status(400).json({ message: error.details[0].message });

      return res.status(200).json({ message: "Data added success", paslon });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const paslonAll = await PaslonService.findAll();

      return res.status(200).json(paslonAll);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const paslon = await PaslonService.findOne(id);

      return res
        .status(200)
        .json({ message: "Get one data paslon success", paslon });
    } catch (error) {
      return res.status(500).send("Data paslon not found!");
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { body } = req;
      const { error, value } = PaslonValidator.validate(body);

      if (error)
        return res.status(400).json({ message: error.details[0].message });

      await PaslonService.update(value, id);

      return res.status(200).json({
        message: "Update success",
        data: {
          id: id,
          ...value,
        },
      });
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
        message: "Data not found!",
      });
    }
  }
})();
