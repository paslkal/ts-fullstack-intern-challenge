import { Injectable } from '@nestjs/common';
import { Like } from './types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getLikes(): Like[]{
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
