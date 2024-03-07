import { AppDataSource } from "../data-source";
import { Partai } from "../entity/Partai";

export default new (class PartaiService {
  repository = AppDataSource.getRepository(Partai);

  async create(reqBody: any): Promise<any> {
    try {
      const partai = this.repository.create({
        nama: reqBody.nama,
        ketua_umum: reqBody.ketua_umum,
        visi_misi: reqBody.visi_misi,
        alamat: reqBody.alamat,
      });

      await AppDataSource.getRepository(Partai)
        .createQueryBuilder()
        .insert()
        .into(Partai)
        .values(partai)
        .execute();

      console.log(partai);
      return partai;
    } catch (error) {
      throw error;
    }
  }

  async find(): Promise<any> {
    try {
      const partaiAll = await AppDataSource.getRepository(Partai)
        .createQueryBuilder("partai")
        .getMany();
      return partaiAll;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<Partai> {
    try {
      const partai = await this.repository.findOne({
        where: {
          id,
        },
      });

      if (!partai) {
        throw new Error("Partai not found!");
      }

      await this.repository.remove(partai);

      await AppDataSource.getRepository(Partai)
        .createQueryBuilder()
        .delete()
        .from(Partai)
        .where("id = :id", { id: 1 })
        .execute();

      return partai;
    } catch (error) {
      throw error;
    }
  }
})();
