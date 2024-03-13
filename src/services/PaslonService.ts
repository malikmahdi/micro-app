import { AppDataSource } from "../data-source";
import { Paslon } from "../entity/Paslon";
import IPaslon from "../interface/ipaslon";

export default new (class PaslonService {
  repository = AppDataSource.getRepository(Paslon);

  async create(reqBody: IPaslon): Promise<IPaslon> {
    try {
      const paslon = this.repository.create({
        serial_number: reqBody.serial_number,
        image: reqBody.image,
        name: reqBody.name,
        visi_misi: reqBody.visi_misi,
      });

      await this.repository
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

  async findAll(): Promise<any> {
    try {
      const paslonAll = await AppDataSource.getRepository(Paslon)
        .createQueryBuilder("paslon")
        .getMany();
      return paslonAll;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      const paslon = await this.repository
        .createQueryBuilder("paslon")
        .where("paslon.id = :id", { id: id })
        .getOne();

      return paslon;
    } catch (error) {
      throw error;
    }
  }

  async update(
    reqBody: {
      serial_number: number;
      image: string;
      name: string;
      visi_misi: string;
    },
    id: number
  ): Promise<any> {
    try {
      const updatePaslon = await this.repository
        .createQueryBuilder()
        .update(Paslon)
        .set({
          serial_number: reqBody.serial_number,
          image: reqBody.image,
          name: reqBody.name,
          visi_misi: reqBody.visi_misi,
        })
        .where("id = :id", { id: id })
        .execute();

      if (!updatePaslon) {
        throw new Error("Data partai failed to update");
      }

      return updatePaslon;
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
        throw new Error("Data Paslon not found!");
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
