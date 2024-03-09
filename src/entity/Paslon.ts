import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @Column({ name: "partai.id" })
  partai_id: number;

  // @OneToMany(() => Partai, (partai) => )
}
