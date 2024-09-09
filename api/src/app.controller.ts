import { Controller, Get, Post, Body, HttpCode, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CatInterface } from './interfaces/cat.interface.js';
import { UserInterface } from './interfaces/user.interface.js'; 

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
  addLike(@Body() cat: CatInterface) {
    return this.appService.addLike(cat)
  }

  @HttpCode(200)
  @Delete('likes/:cat_id')
  deleteLike(@Param('cat_id') cat_id: string) {
    return this.appService.deleteLike(cat_id)
  }

  @HttpCode(201)
  @Post('user') 
  addUser(@Body() user: UserInterface) {
    return this.appService.createUser(user)
  } 
}