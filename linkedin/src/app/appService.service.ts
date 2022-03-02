import { Injectable } from '@angular/core';
import { POSTS, USERS } from './mockDB';
import { Person, Post } from './models';

@Injectable()
export class AppService {
  constructor() {}
  getUsers(): Person[] {
    return USERS;
  }

  getPosts(): Post[] {
    return POSTS;
  }

  findUser(id: number): Person {
    return USERS.find((element) => element.id === id)!;
  }
}
