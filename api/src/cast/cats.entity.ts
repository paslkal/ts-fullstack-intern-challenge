import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'cats'})
export class Cats {
  @PrimaryGeneratedColumn()
  cat_id: string

  @CreateDateColumn()
  createdAt: Date
}