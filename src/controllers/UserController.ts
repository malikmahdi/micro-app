// User for logical system application

import { Request, Response } from "express";
import UserService from "../services/UserService";
import { UserValidator } from "../validator/User";

export default new (class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const { error, value } = UserValidator.validate(data);
      const user = await UserService.create(value);

      if (error)
        return res.status(400).json({ message: error.details[0].message });

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const users = await UserService.find();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const user = await UserService.findOne(id);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Data user gagal ditemukan" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { body } = req;
      const { error, value } = UserValidator.validate(body);

      if (error)
        return res.status(400).json({ message: error.details[0].message });

      await UserService.update(value, id);

      return res
        .status(200)
        .json({ message: "Update success", data: { id: id, ...value } });
    } catch (error) {
      return res.status(500).json({ message: "Update Error" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);

      await UserService.delete(id);

      return res.status(200).send("Data berhasil dihapus");
    } catch (error) {
      return res.status(500).json({
        message: error + "Data has been deleted",
      });
    }
  }
})();
