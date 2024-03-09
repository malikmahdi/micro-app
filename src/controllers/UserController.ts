// User for logical system application

import { Request, Response } from "express";
import UserService from "../services/UserService";

export default new (class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const user = await UserService.create(data);

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
      await UserService.update(body, id);

      return res
        .status(200)
        .json({ message: "Update success", data: { id: id, ...body } });
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
