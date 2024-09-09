import { CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'cats'})
export class Cats {
  @PrimaryColumn()
  cat_id: string

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date
}