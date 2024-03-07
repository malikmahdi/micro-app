import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Partai {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  ketua_umum: string;

  @Column()
  visi_misi: string;

  @Column()
  alamat: string;
}
