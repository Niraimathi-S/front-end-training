import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MockDB } from '../mockDB.service';
import { Person } from '../person.model';
import { Post } from '../post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private db: MockDB) {}

  currentUser: Person = new Person(0, '', '', '', []);
  users: Map<number, Person> = new Map<number, Person>();
  posts: any;
  isEmployed: boolean = false;
  newPost: any;

  ngOnInit(): void {
    this.currentUser = this.db.USERS.get(2)!;
    this.users = this.db.USERS;
    this.posts = this.db.posts;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.newPost = new Post(2, '', 0, 'just now', 0);
      this.newPost.mediaLink = '/assets/images/' + file.name;
      this.posts.push(this.newPost);
    }
  }
}
