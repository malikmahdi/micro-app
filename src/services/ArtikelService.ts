import { Response } from "express";
import { AppDataSource } from "../data-source";
import { Article } from "../entity/Article";

export default new (class ArtikelService {
  repository = AppDataSource.getRepository(Article);

  async create(reqBody: any): Promise<any> {
    try {
      const artikel = this.repository.create({
        title: reqBody.title,
        slug: reqBody.slug,
        date_published: reqBody.date_published,
        image: reqBody.image,
        description: reqBody.description,
        created_at: reqBody.created_at,
      });

      await AppDataSource.getRepository(Article)
        .createQueryBuilder()
        .insert()
        .into(Article)
        .values(artikel)
        .execute();

      console.log(artikel);
      return artikel;
    } catch (error) {
      throw error;
    }
  }

  async find(): Promise<any> {
    try {
      const artikel = await AppDataSource.getRepository(Article)
        .createQueryBuilder("artikel")
        .getMany();

      return artikel;
    } catch (error) {
      throw error;
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
      const updateArtikel = await AppDataSource.createQueryBuilder()
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
      const artikel = await this.repository.findOne({
        where: {
          id,
        },
      });

      if (!artikel) {
        throw new Error("artikel not found!");
      }

      await this.repository.remove(artikel);

      await AppDataSource.getRepository(Article)
        .createQueryBuilder()
        .delete()
        .from(Article)
        .where("id = :id", { id: 1 })
        .execute();

      return artikel;
    } catch (error) {
      throw error;
    }
  }
})();
