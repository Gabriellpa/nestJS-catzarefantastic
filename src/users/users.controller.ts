import { Controller, Get, Body, Post, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUser } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService){}

  @Get()
  getUsers(): Promise<User[]>{
    return this.usersService.findAll();
  }

  @Post()
  save(@Body() createUser: CreateUser): Promise<User> {
    return this.usersService.save(createUser);
  }

  @Delete('/:name')
  delete(@Param('name') name: string): Promise<string> {
    return this.usersService.delete(name);
  }
}
