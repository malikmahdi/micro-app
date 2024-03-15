import { AppDataSource } from "../data-source";
import { Voting } from "../entity/Voting";
import IVoting from "../interface/ivoting";

export default new (class VotingService {
  repository = AppDataSource.getRepository(Voting);

  async create(reqBody: IVoting): Promise<IVoting> {
    try {
      const voting = this.repository.create({
        userId: reqBody.userId,
        paslonId: reqBody.paslonId,
      });

      await this.repository
        .createQueryBuilder()
        .insert()
        .into(Voting)
        .values(voting)
        .execute();
      console.log("ini data voting :", voting);
      return voting;
    } catch (error) {
      throw error;
    }
  }

  async find(): Promise<any> {
    try {
      const voting = await this.repository
        .createQueryBuilder("voting")
        .innerJoinAndSelect("voting.user", "user")
        .innerJoinAndSelect("voting.paslon", "paslon")
        .getMany();

      return voting;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<Voting> {
    try {
      const voting = await this.repository.findOne({
        where: {
          id,
        },
      });

      if (!voting) {
        throw new Error("data vote not found!");
      }

      await this.repository.remove(voting);

      await this.repository
        .createQueryBuilder()
        .delete()
        .from(Voting)
        .where("id = :id", { id: 1 })
        .execute();

      return voting;
    } catch (error) {
      throw error;
    }
  }
})();
