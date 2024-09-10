import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cats/cats.entity.js';
import { User } from './users/users.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'cat-pinterest-api-pg',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'support_lk_db',
      entities: [Cat, User],
      synchronize: true
    }),

    TypeOrmModule.forFeature([Cat, User])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
