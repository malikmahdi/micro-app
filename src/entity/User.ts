import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
// import { Blog } from "./Blog";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  alamat: string;

  @Column()
  jenis_kelamin: string;

  @Column()
  username: string;

  @Column()
  password: string;

  // @OneToMany(() => Blog, (blog) => blog.user)
  // blog: Blog[];
}
