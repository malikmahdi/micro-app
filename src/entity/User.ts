import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Article } from "./Article";
import { Voting } from "./Voting";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  address: string;

  @Column()
  gender: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Article, (article) => article.user)
  article: Article[];

  @OneToOne(() => Voting, (voting) => voting.user)
  voting: Voting;
}
