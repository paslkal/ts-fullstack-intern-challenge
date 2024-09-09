import { User } from "../users/users.entity.js";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({name: 'cats'})
export class Cat {
  @PrimaryColumn()
  cat_id: string

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date

  @ManyToOne(() => User, user => user.cats)
  @JoinColumn({name: 'user_id'})
  user: User
}