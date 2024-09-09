import { Injectable } from '@nestjs/common';
import { CatInterface } from './interfaces/cat.interface.js';
import { HttpException } from '@nestjs/common';
import { Cat } from './cats/cats.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import isCat from './utils/isCat.js';
import { Repository } from 'typeorm';
import { UserInterface } from './interfaces/user.interface.js';
import isUser from './utils/isUser.js';
import { User } from './users/users.entity.js';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,

    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  getLikes() {
    const allCats = this.catRepository.find()
    return allCats
  }

  addLike(cat: CatInterface) {
    if (!isCat(cat)) {
      throw new HttpException('Invalid Input', 405)
    }

    const {cat_id} = cat

    const newCat = new Cat()

    newCat.cat_id = cat_id

    this.catRepository.save(newCat)

    return newCat
  }

  async deleteLike(cat_id: string) {
    const {affected} = await this.catRepository.delete(cat_id)

    if (affected === 0) {
      throw new HttpException('Like not found', 404)
    }

    return 'Successful operation'
  }

  async createUser(user: UserInterface) {
    if (!isUser(user)) {
      return new HttpException('Invalid input', 405)
    }

    const {login} = user
    const {password} = user

    const newUser = new User()

    newUser.login = login
    newUser.password = password

    const resultUser = await this.userRepository.save(newUser)

    return resultUser
  }
}