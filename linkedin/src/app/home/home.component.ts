import { Component, OnInit } from '@angular/core';
import { AppService } from '../appService.service';
import { Person, Post } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private appService: AppService) {}

  public currentUser!: Person;
  public users!: Person[];
  public hashtags: string[] = [
    'jobpostings',
    'emotionalintelligence',
    'mechanicalengineering',
    'energy',
    'intelligence',
  ];
  public news = [
    {
      heading: 'Rise of digital frauds in India',
      time: '22h ago • 1,560 readers',
    },
    { heading: 'Russia attacks Ukraine', time: '21m ago • 477,362 readers' },
    {
      heading: 'Is it ever OK to lie on your CV?',
      time: '22h ago • 8,370 readers',
    },
    {
      heading: 'BharatPe sacks head of controls',
      time: '22h ago • 1,560 readers',
    },
    {
      heading: 'Does WFH affect career growth?',
      time: '22h ago • 1,560 readers',
    },
  ];
  public findUser: any;

  ngOnInit(): void {
    this.currentUser = this.appService.findUser(2)!;
    this.users = this.appService.getUsers();
    this.findUser = this.appService.findUser;
  }
}
