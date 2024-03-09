// Service for logic when app comunication to database

import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export default new (class UserService {
  repository = AppDataSource.getRepository(User);

  // ---------------------- Create -------------------------------
  async create(reqBody: any): Promise<any> {
    try {
      const data_user = this.repository.create({
        fullname: reqBody.fullname,
        address: reqBody.address,
        gender: reqBody.gender,
        username: reqBody.username,
        password: reqBody.password,
      });

      await AppDataSource.getRepository(User)
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(data_user)
        .execute();

      console.log(data_user);
      return data_user;
    } catch (error) {
      throw error;
    }
  }

  // ---------------------- Find -------------------------------
  async find(): Promise<any> {
    try {
      const users = await this.repository.createQueryBuilder("user").getMany();
      return users;
    } catch (error) {
      throw error;
    }
  }

  // ---------------------- Find One -------------------------------
  async findOne(id: number): Promise<any> {
    try {
      const user = await this.repository
        .createQueryBuilder("user")
        .where("user.id = :id", { id: id })
        .getOne();

      return user;
    } catch (error) {
      throw error;
    }
  }

  // ---------------------- Update -------------------------------
  async update(
    body: {
      fullname: string;
      address: string;
      gender: string;
      username: string;
      password: string;
    },
    id: number
  ): Promise<any> {
    try {
      const user_update = await AppDataSource.createQueryBuilder()
        .update(User)
        .set({
          fullname: body.fullname,
          address: body.address,
          gender: body.gender,
          username: body.username,
          password: body.password,
        })
        .where("id = :id", { id: id })
        .execute();

      // if (!user_update) {
      //   throw new Error("User not found!");
      // }

      return user_update;
    } catch (error) {
      throw error;
    }
  }

  // ---------------------- Delete -------------------------------
  async delete(id: number): Promise<User> {
    try {
      const data_user = await this.repository.findOne({
        where: {
          id,
        },
      });

      if (!data_user) {
        throw new Error("User not found!");
      }

      await this.repository.remove(data_user);

      await AppDataSource.getRepository(User)
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", { id: 1 })
        .execute();

      return data_user;
    } catch (error) {
      throw error;
    }
  }
})();
