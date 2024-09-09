import { Injectable } from '@nestjs/common';
import { cat } from './interfaces/cat.interface.js';
import { HttpException } from '@nestjs/common';
import { Cats } from './cast/cats.entity.js';
import isCat from './utils/isCat.js';

@Injectable()
export class AppService {
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

  addLike(cat: cat) {
    if (!isCat(cat)) {
      throw new HttpException('Invalid Input', 405)
    }

    const newCat = new Cats()

    newCat.cat_id = cat['cat_id']

    return newCat

  }
}