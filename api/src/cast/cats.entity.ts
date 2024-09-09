import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'cats'})
export class Cats {
  @PrimaryGeneratedColumn({name: 'cat_id'})
  catId: string

  @CreateDateColumn()
  createdAt: Date
}