import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Paslon } from "./Paslon";

@Entity()
export class Partai {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  logo: string;

  @Column()
  chairman: string;

  @Column()
  visi_misi: string;

  @Column()
  address: string;

  // @ManyToOne(() => Paslon, (paslon) => paslon.partai)
  // paslon: Paslon;
}
