import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  create(email: string, password: string, username: string) {
    // create user
  }
}
