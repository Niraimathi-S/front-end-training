import { Person } from './person.model';

export class Post {
  author: number;
  mediaLink: string;
  likes: number;
  comments: number;
  status?: string;
  detaAndTime: string;

  constructor(
    author: number,
    mediaLink: string,
    likes: number,
    detaAndTime: string,
    comments: number,
    status?: string
  ) {
    this.author = author;
    this.mediaLink = mediaLink;
    this.likes = likes;
    this.comments = comments;
    this.detaAndTime = detaAndTime;
    this.status = status;
  }
}
