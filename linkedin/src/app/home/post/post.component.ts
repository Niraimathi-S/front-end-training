import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/appService.service';
import { Person, Post } from 'src/app/models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  public posts!: Post[];
  public findUser: any;
  private newPost!: Post;
  public currentUser!: Person;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.posts = this.appService.getPosts();
    this.findUser = this.appService.findUser;
    this.currentUser = this.appService.findUser(2)!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.newPost = {
        author: 2,
        mediaLink: '/assets/images/',
        likes: 0,
        detaAndTime: 'just now',
        comments: 0,
      };
      this.newPost.mediaLink = this.newPost.mediaLink + file.name;
      this.posts.push(this.newPost);
    }
  }

  addLike(post: Post): void {
    this.posts.find((element) => element == post)!.likes++;
    console.log('clicked');
    console.log(this.posts.find((element) => element == post));
  }
}
