import { Response } from "express";
import { AppDataSource } from "../data-source";
import { Article } from "../entity/Article";
import IArticle from "../interface/iarticle";

export default new (class ArticleService {
  repository = AppDataSource.getRepository(Article);

  async create(reqBody: IArticle): Promise<IArticle> {
    try {
      const article = this.repository.create({
        title: reqBody.title,
        slug: reqBody.slug,
        date_published: reqBody.date_published,
        image: reqBody.image,
        description: reqBody.description,
        created_at: reqBody.created_at,
        userId: reqBody.userId,
      });

      await AppDataSource.getRepository(Article)
        .createQueryBuilder()
        .insert()
        .into(Article)
        .values(article)
        .execute();

      console.log(article);
      return article;
    } catch (error) {
      throw error;
    }
  }

  async find(): Promise<any> {
    try {
      const article = await this.repository
        .createQueryBuilder("article")
        .innerJoinAndSelect("article.user", "user")
        .getMany();

      return article;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      const article = await this.repository
        .createQueryBuilder("article")
        .innerJoinAndSelect("article.user", "user")
        .where("article.id = :id", { id: id })
        .getOne();

      return article;
    } catch (error) {
      throw new Error("Data article tidak ditemukan");
    }
  }

  // Update
  async update(
    reqBody: {
      title: string;
      slug: string;
      date_published: Date;
      image: string;
      description: string;
      created_at: Date;
    },
    id: number
  ): Promise<any> {
    try {
      const updateArticle = await AppDataSource.createQueryBuilder()
        .update(Article)
        .set({
          title: reqBody.title,
          slug: reqBody.slug,
          date_published: reqBody.date_published,
          image: reqBody.image,
          description: reqBody.description,
          created_at: reqBody.created_at,
        })
        .where("id = :id", { id: id })
        .execute();
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<Article> {
    try {
      const article = await this.repository.findOne({
        where: {
          id,
        },
      });

      if (!article) {
        throw new Error("article not found!");
      }

      await this.repository.remove(article);

      await AppDataSource.getRepository(Article)
        .createQueryBuilder()
        .delete()
        .from(Article)
        .where("id = :id", { id: 1 })
        .execute();

      return article;
    } catch (error) {
      throw error;
    }
  }
})();
