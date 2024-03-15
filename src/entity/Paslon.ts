import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Partai } from "./Partai";
import { Voting } from "./Voting";

@Entity()
export class Paslon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serial_number: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  visi_misi: string;

  @OneToMany(() => Partai, (partai) => partai.paslon)
  partai: Partai[];

  @OneToOne(() => Voting, (voting) => voting.paslon)
  voting: Voting;
}
