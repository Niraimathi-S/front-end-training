export interface Person {
  id: number;
  name: string;
  picture: string;
  location: string;
  education: string[];
  job?: string;
  friends?: number[];
}

export interface Post {
  author: number;
  mediaLink: string;
  likes: number;
  comments: number;
  status?: string;
  detaAndTime: string;
}
