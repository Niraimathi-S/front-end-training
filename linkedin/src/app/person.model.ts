export class Person {
  id: number;
  name: string;
  picture: string;
  location: string;
  education: string[];
  job?: string;
  friends?: number[];

  constructor(
    id: number,
    name: string,
    picture: string,
    location: string,
    education: string[],
    friends?: number[],
    job?: string
  ) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.education = education;
    this.job = job;
    this.friends = friends;
    this.picture = picture;
  }
}
