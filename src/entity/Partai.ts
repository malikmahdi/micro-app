import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
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

  @Column({ name: "paslon_id" })
  paslonId: number;

  @ManyToOne(() => Paslon, (paslon) => paslon.partai)
  @JoinColumn({ name: "paslon_id", referencedColumnName: "id" })
  paslon: Paslon;
}
