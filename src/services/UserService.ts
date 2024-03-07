// Service for logic when app comunication to database

import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export default new (class UserService {
  repository = AppDataSource.getRepository(User);

  async create(reqBody: any): Promise<any> {
    try {
      const user = this.repository.create({
        fullname: reqBody.fullname,
        alamat: reqBody.alamat,
        jenis_kelamin: reqBody.jenis_kelamin,
        username: reqBody.username,
        password: reqBody.password,
      });

      await AppDataSource.getRepository(User)
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(user)
        .execute();

      console.log(user);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async find(): Promise<any> {
    try {
      const users = await AppDataSource.getRepository(User)
        .createQueryBuilder("user")
        .getMany();
      return users;
    } catch (error) {
      throw error;
    }
  }

  // async patch(id: number): Promise<any> {
  //   try {
  //     const user = this.repository.create({
  //       fullname: reqBody.fullname,
  //       alamat: reqBody.alamat,
  //       jenis_kelamin: reqBody.jenis_kelamin,
  //       username: reqBody.username,
  //       password: reqBody.password,
  //     });

  //     await AppDataSource.createQueryBuilder()
  //       .update(User)
  //       .set({ firstName: "Timber", lastName: "Saw" })
  //       .where("id = :id", { id: 1 })
  //       .execute();
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  async update(
    reqBody: {
      fullname: any;
      alamat: any;
      jenis_kelamin: any;
      username: any;
      password: any;
    },
    id: number
  ): Promise<any> {
    try {
      const Update = this.repository.create({
        fullname: reqBody.fullname,
        alamat: reqBody.alamat,
        jenis_kelamin: reqBody.jenis_kelamin,
        username: reqBody.username,
        password: reqBody.password,
      });
      const userUpdate = await this.repository.findOne({
        where: {
          id,
        },
      });

      if (!userUpdate) {
        throw new Error("User not found!");
      }

      await this.repository.update({ id }, Update);
      AppDataSource.createQueryBuilder()
        .update(User)
        .set(Update)
        .where(userUpdate)
        .execute();
    } catch (error) {
      throw error;
    }
  }

  async patch(
    reqBody: {
      fullname: any;
      alamat: any;
      jenis_kelamin: any;
      username: any;
      password: any;
    },
    id: number
  ): Promise<any> {
    try {
      const Update = this.repository.create({
        fullname: reqBody.fullname,
        alamat: reqBody.alamat,
        jenis_kelamin: reqBody.jenis_kelamin,
        username: reqBody.username,
        password: reqBody.password,
      });
      const userUpdate = await this.repository.findOne({
        where: {
          id,
        },
      });

      if (!userUpdate) {
        throw new Error("User not found!");
      }

      await this.repository.update({ id }, Update);
      AppDataSource.createQueryBuilder()
        .update(User)
        .set(Update)
        .where(userUpdate)
        .execute();
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<User> {
    try {
      const user = await this.repository.findOne({
        where: {
          id,
        },
      });

      if (!user) {
        throw new Error("User not found!");
      }

      await this.repository.remove(user);

      await AppDataSource.getRepository(User)
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", { id: 1 })
        .execute();

      return user;
    } catch (error) {
      throw error;
    }
  }
})();
