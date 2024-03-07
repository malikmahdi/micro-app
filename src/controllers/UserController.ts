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

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const user_id = parseInt(req.params.id);
      const userUpdate = await UserService.update(req.body, user_id);

      return res.status(200).json(userUpdate);
    } catch (error) {
      return res.status(500).json({ message: "Update Error" });
    }
  }

  async patch(req: Request, res: Response): Promise<Response> {
    try {
      const user_id = parseInt(req.params.id);
      const userUpdate = await UserService.patch(req.body, user_id);

      return res.status(200).json(userUpdate);
    } catch (error) {
      return res.status(500).json({ message: "Update Error" });
    }
  }

  // async patch(req: Request, res: Response): Promise<Response> {
  //   try {
  //     const data = req.body;
  //     const users = await UserService.patch(data);

  //     return res.status(200).json(users);
  //   } catch (error) {
  //     return res.status(500).json({ message: error });
  //   }
  // }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);

      await UserService.delete(id);

      return res.status(200).send("Data berhasil dihapus");
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  }
})();
