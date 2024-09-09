import { Injectable } from '@nestjs/common';
import { cat } from './interfaces/cat.interface.js';
import { HttpException } from '@nestjs/common';
import { Cats } from './cast/cats.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import isCat from './utils/isCat.js';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Cats)
    private catsRepository: Repository<Cats>
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getLikes(): cat[]{
    return [
      {
        cat_id: 'asu7as',
        created_at: '2024-03-20T09:12:28Z'
      }
    ]
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
}