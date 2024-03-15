import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Paslon } from "./Paslon";
import { User } from "./User";

@Entity()
export class Voting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "user_id" })
  userId: number;

  @Column({ name: "paslon_id" })
  paslonId: number;

  @OneToOne(() => User, (user) => user.voting)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;

  @OneToOne(() => Paslon, (paslon) => paslon.voting)
  @JoinColumn({ name: "paslon_id", referencedColumnName: "id" })
  paslon: Paslon;
}
