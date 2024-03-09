import { Request, Response } from "express";
import ArticleService from "../services/ArticleService";

export default new (class ArticleController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const article = await ArticleService.create(data);

      return res.status(200).json(article);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const articles = await ArticleService.find();

      return res.status(200).json({ articles });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const article = await ArticleService.findOne(id);

      return res.status(200).json({ message: "Get One success", article });
    } catch (error) {
      return res.status(500).json({ messagse: "Data article not found!" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const article_id = parseInt(req.params.id);
      const { body } = req;
      await ArticleService.update(body, article_id);

      return res
        .status(200)
        .json({ message: "Update Success", data: { id: article_id, ...body } });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);

      await ArticleService.delete(id);

      return res.status(200).send("Data berhasil dihapus");
    } catch (error) {
      return res.status(500).json({
        message: "Data not found!",
      });
    }
  }
})();