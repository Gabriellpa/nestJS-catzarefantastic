import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { User } from './user.entity'
import { CreateUser } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: MongoRepository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async save(createUser: CreateUser): Promise<User> {
    return await this.usersRepository.save(this.usersRepository.create(createUser));
  }

  async delete(userName: string): Promise<string> {
    //this.usersRepository.create({ firstName: userName })
    await this.usersRepository.deleteOne({ firstName: userName });
    return userName;
  }
}
