import { Cat } from "../cats/cats.entity.js";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column()
  login: string

  @Column()
  password: string 

  @OneToMany(() => Cat, cat => cat.user, {onDelete: 'CASCADE'})
  cats: Cat[]
}