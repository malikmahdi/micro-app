import { AppDataSource } from "../data-source";
import { Artikel } from "../entity/Artikel";

export default new (class ArtikelService {
  repository = AppDataSource.getRepository(Artikel);

  async create(reqBody: any): Promise<any> {
    try {
      const artikel = this.repository.create({
        title: reqBody.title,
        date: reqBody.date,
        deskripsi: reqBody.deskripsi,
      });

      await AppDataSource.getRepository(Artikel)
        .createQueryBuilder()
        .insert()
        .into(Artikel)
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
      const artikel = await AppDataSource.getRepository(Artikel)
        .createQueryBuilder("artikel")
        .getMany();

      return artikel;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<Artikel> {
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

      await AppDataSource.getRepository(Artikel)
        .createQueryBuilder()
        .delete()
        .from(Artikel)
        .where("id = :id", { id: 1 })
        .execute();

      return artikel;
    } catch (error) {
      throw error;
    }
  }
})();
