import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Paslon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  nomor_urut: number;

  @Column()
  visi_misi: string;
}
