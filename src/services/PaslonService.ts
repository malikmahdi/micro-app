import { AppDataSource } from "../data-source";
import { Paslon } from "../entity/Paslon";

export default new (class PaslonService {
  repository = AppDataSource.getRepository(Paslon);

  async create(reqBody: any): Promise<any> {
    try {
      const paslon = this.repository.create({
        nama: reqBody.nama,
        nomor_urut: reqBody.nomor_urut,
        visi_misi: reqBody.visi_misi,
      });

      await AppDataSource.getRepository(Paslon)
        .createQueryBuilder()
        .insert()
        .into(Paslon)
        .values(paslon)
        .execute();

      console.log(paslon);
      return paslon;
    } catch (error) {
      throw error;
    }
  }

  async find(): Promise<any> {
    try {
      const paslonAll = await AppDataSource.getRepository(Paslon)
        .createQueryBuilder("paslon")
        .getMany();
      return paslonAll;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<Paslon> {
    try {
      const paslon = await this.repository.findOne({
        where: {
          id,
        },
      });

      if (!paslon) {
        throw new Error("Paslon not found!");
      }

      await this.repository.remove(paslon);

      await AppDataSource.getRepository(Paslon)
        .createQueryBuilder()
        .delete()
        .from(Paslon)
        .where("id = :id", { id: 1 })
        .execute();

      return paslon;
    } catch (error) {
      throw error;
    }
  }
})();
