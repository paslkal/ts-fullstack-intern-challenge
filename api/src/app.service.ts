import { Injectable } from '@nestjs/common';
import { cat } from './interfaces/cat.interface.js';
import { HttpException } from '@nestjs/common';
import { Cats } from './cats/cats.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import isCat from './utils/isCat.js';
import { Repository } from 'typeorm';
import { user } from './interfaces/user.interface.js';
import isUser from './utils/isUser.js';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Cats)
    private catsRepository: Repository<Cats>
  ) {}

  getLikes() {
    const allCats = this.catsRepository.find()
    return allCats
  }

  addLike(inputCat: cat) {
    if (!isCat(inputCat)) {
      throw new HttpException('Invalid Input', 405)
    }

    const newCat = new Cats()

    newCat.cat_id = inputCat.cat_id

    this.catsRepository.save(newCat)

    return newCat
  }

  async deleteLike(cat_id: string) {
    const {affected} = await this.catsRepository.delete(cat_id)

    if (affected === 0) {
      throw new HttpException('Like not found', 404)
    }

    return 'Successful operation'
  }

  createUser(user: user) {
    if (!isUser(user)) {
      return new HttpException('Invalid input', 405)
    }

    return user
  }
}