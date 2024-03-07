import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Artikel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  date: string;

  @Column()
  deskripsi: string;
}
