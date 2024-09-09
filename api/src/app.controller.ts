import { Controller, Get, Post, Body, HttpException, HttpCode, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service.js';
import { Cat } from './interfaces/cat.interface.js';
import { user } from './interfaces/user.interface.js'; 

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(200)
  @Get('likes')
  getLikes() {
    return this.appService.getLikes()
  }

  @HttpCode(201)
  @Post('likes')
  addLike(@Body() cat: Cat) {
    return this.appService.addLike(cat)
  }

  @HttpCode(200)
  @Delete('likes/:cat_id')
  deleteLike(@Param('cat_id') cat_id: string) {
    return this.appService.deleteLike(cat_id)
  }

  @HttpCode(201)
  @Post('user') 
  addUser(@Body() user: user) {
    this.appService.createUser(user)
  } 
}