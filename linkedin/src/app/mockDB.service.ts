import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Person } from './person.model';
import { Post } from './post.model';

@Injectable()
export class MockDB {
  public USERS: Map<number, Person> = new Map<number, Person>();
  public posts: Post[] = [];

  constructor() {
    this.addUser();
    this.addPosts();
  }

  addUser(): void {
    this.USERS.set(
      1,
      new Person(
        1,
        'Mohana',
        '/assets/images/mohana.webp',
        'Thiruvanaikoil, Trichy',
        ['B.tech-IT'],
        [2, 4, 8],
        'Infosys'
      )
    );
    this.USERS.set(
      2,
      new Person(
        2,
        'Nirai',
        '/assets/images/nirai.jpeg',
        'Tholudur, Cuddalore',
        ['B.tech-IT'],
        [1, 3, 9, 8, 10]
      )
    );
    this.USERS.set(
      3,
      new Person(3, 'Velu', '/assets/images/velu.webp', 'Tholudur, Cuddalore', [
        'B.Sc-CS',
      ])
    );
    this.USERS.set(
      4,
      new Person(
        4,
        'Akshaya',
        '/assets/images/akshaya.jpeg',
        'Tholudur, Cuddalore',
        ['B.Sc-CS'],
        [3, 7, 8]
      )
    );
    this.USERS.set(
      5,
      new Person(
        5,
        'Sankar',
        '/assets/images/defaultPic.jpeg',
        'Thirunelveli',
        ['B.E-ECE']
      )
    );
    this.USERS.set(
      6,
      new Person(
        6,
        'Sundari',
        '/assets/images/defaultPic.jpeg',
        'Vaitheeswarankoil, Nagapatima',
        ['B.tech-IT']
      )
    );
    this.USERS.set(
      7,
      new Person(7, 'Abinaya', '/assets/images/abi.jpeg', 'Thanjavur', [
        'B.E-CSE',
      ])
    );
    this.USERS.set(
      8,
      new Person(
        8,
        'Sandhiya',
        '/assets/images/sandhiya.jpeg',
        'Perambalur',
        ['B.E.CSE'],
        [2, 4, 9]
      )
    );
    this.USERS.set(
      9,
      new Person(
        9,
        'Piraveen',
        '/assets/images/defaultPic.jpeg',
        'Pennadam, Cuddalore',
        ['MBBS'],
        [2, 4, 8]
      )
    );
    this.USERS.set(
      10,
      new Person(
        10,
        'Keerthani',
        '/assets/images/defaultPic.jpeg',
        'Pabanasam, Thanjavur',
        ['B.E-ECE'],
        [1, 2, 7]
      )
    );
  }

  addPosts(): void {
    this.posts.push(
      new Post(
        4,
        '/assets/images/post1.jpeg',
        29,
        '5hr',
        13,
        'It is true tho..'
      )
    );
    this.posts.push(new Post(2, '/assets/images/post2.jpeg', 80, '2w', 13));
    this.posts.push(new Post(8, '/assets/images/post3.jpeg', 47, '3w', 54));
    this.posts.push(
      new Post(
        10,
        '/assets/images/post4.jpeg',
        62,
        '3w',
        40,
        'Freshworks is hiring for multiple sales roles such as #SDR, #insidesales (SMB), #fieldsales (Enterprise) and #ChannelSales.'
      )
    );
    this.posts.push(new Post(8, '/assets/images/post5.jpeg', 42, '3w', 34));
  }
}
