import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { User } from "./User";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  date_published: Date;

  @Column()
  image: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ name: "user_id" })
  userId: number;

  @ManyToOne(() => User, (user) => user.article)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;
}
