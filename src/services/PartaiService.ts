import { AppDataSource } from "../data-source";
import { Partai } from "../entity/Partai";

export default new (class PartaiService {
  repository = AppDataSource.getRepository(Partai);

  async create(reqBody: any): Promise<any> {
    try {
      const partai = this.repository.create({
        name: reqBody.name,
        logo: reqBody.logo,
        chairman: reqBody.chairman,
        visi_misi: reqBody.visi_misi,
        address: reqBody.address,
      });

      await this.repository
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

  async findAll(): Promise<any> {
    try {
      const partaiAll = await this.repository
        .createQueryBuilder("partai")
        .getMany();
      return partaiAll;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      const partai = await this.repository
        .createQueryBuilder()
        .where("partai.id = :id", { id: id })
        .getOne();
    } catch (error) {
      throw error;
    }
  }

  async update(
    reqBody: {
      name: string;
      logo: string;
      chairman: string;
      visi_misi: string;
      address: string;
    },
    id: number
  ): Promise<any> {
    try {
      const updatePartai = await this.repository
        .createQueryBuilder()
        .update(Partai)
        .set({
          name: reqBody.name,
          logo: reqBody.logo,
          chairman: reqBody.chairman,
          visi_misi: reqBody.visi_misi,
          address: reqBody.address,
        })
        .where("id = :id", { id: id })
        .execute();
    } catch (error) {}
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
