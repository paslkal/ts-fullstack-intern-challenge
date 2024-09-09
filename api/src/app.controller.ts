import { Controller, Get, Post, Body, HttpException, HttpCode, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service.js';
import { cat } from './interfaces/cat.interface.js';
import { User } from './interfaces/user.interface.js'; 
import { Cats } from './cast/cats.entity.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @HttpCode(200)
  @Get('likes')
  getLikes() {
    return this.appService.getLikes()
  }

  @HttpCode(201)
  @Post('likes')
  addLike(@Body() cat: cat) {
    if (!isCat(cat)) {
      throw new HttpException('Invalid Input', 405)
    }

    const newCat = new Cats()

    newCat.cat_id = cat['cat_id']

    return newCat
  }

  @HttpCode(200)
  @Delete('likes/:cat_id')
  deleteLike(@Param('cat_id') cat_id: string) {
    return cat_id
  }

  @HttpCode(201)
  @Post('user') 
  addUser(@Body() user: User) {
    if (!isUser(user)) {
      return new HttpException('Invalid input', 405)
    }

    return user
  } 
}

function isCat(obj: any): obj is cat {
  const {created_at} = obj
  const {cat_id} = obj

  if (created_at) {
    return obj && typeof cat_id === 'string' && typeof created_at === 'string' 
  }
  
  return obj && typeof cat_id === 'string' 
}

function isUser(obj: any): obj is cat {
  const { login } = obj
  const { password } = obj

  return obj && typeof password === 'string' && typeof login === 'string' 
}