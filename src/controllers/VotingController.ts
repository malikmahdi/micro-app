import { Request, Response } from "express";
import VotingService from "../services/VotingService";

export default new (class VotingController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const vote = await VotingService.create(data);

      return res.status(200).json(vote);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const votings = await VotingService.find();

      return res.status(200).json(votings);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);

      await VotingService.delete(id);

      return res.status(200).send("Data removed successfully");
    } catch (error) {
      return res.status(500).json({ message: "Data not found!" });
    }
  }
})();
