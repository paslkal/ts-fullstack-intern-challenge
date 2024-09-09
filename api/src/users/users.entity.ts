import { Cats } from "../cats/cats.entity.js";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class Users {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column()
  login: string

  @Column()
  password: string 

  @OneToMany(() => Cats, cat => cat.user, {onDelete: 'CASCADE'})
  cats: Cats[]
}