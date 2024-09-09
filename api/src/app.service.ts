import { Injectable } from '@nestjs/common';
import { cat } from './interfaces/cat.interface.js';

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

  addLike() {

  }
}
