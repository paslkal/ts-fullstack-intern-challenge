import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cats } from './cats/cats.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'support_lk_db',
      entities: [Cats],
      synchronize: true
    }),

    TypeOrmModule.forFeature([Cats])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
