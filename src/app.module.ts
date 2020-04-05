import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { join } from 'path';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    url:
      'mongodb://localhost:27017/nest?retryWrites=true&w=majority',
    entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    synchronize: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    logging: true,
  }) ,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
