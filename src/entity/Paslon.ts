import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Partai } from "./Partai";

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

  // @Column({ name: "partai.id" })
  // partai_id: number;

  // @OneToMany(() => Partai, (partai) => partai.paslon)
  // partai: Partai[];
}
