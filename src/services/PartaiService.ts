import { AppDataSource } from "../data-source";
import { Partai } from "../entity/Partai";
import IPartai from "../interface/ipartai";

export default new (class PartaiService {
  repository = AppDataSource.getRepository(Partai);

  async create(reqBody: IPartai): Promise<IPartai> {
    try {
      const partai = this.repository.create({
        name: reqBody.name,
        logo: reqBody.logo,
        chairman: reqBody.chairman,
        visi_misi: reqBody.visi_misi,
        address: reqBody.address,
        paslonId: reqBody.paslonId,
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
        .innerJoinAndSelect("partai.paslon", "paslon")
        .getMany();
      return partaiAll;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      const partai = await this.repository
        .createQueryBuilder("partai")
        .innerJoinAndSelect("partai.paslon", "paslon")
        .where("partai.id = :id", { id: id })
        .getOne();

      return partai;
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

      if (!updatePartai) {
        throw new Error("Partai failed to update");
      }

      return updatePartai;
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
        throw new Error("Data Partai not found!, failed to delete");
      }

      await this.repository.remove(partai);

      await this.repository
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
