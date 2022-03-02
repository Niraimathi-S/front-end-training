import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../appService.service';
import { Person } from '../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private appService: AppService, private route: ActivatedRoute) {}

  private id: number = 0;
  public users!: Person[];
  public currentUser!: Person;
  public findUser: any;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('userId'));
    this.users = this.appService.getUsers();
    this.currentUser = this.appService.findUser(this.id);
    this.findUser = this.appService.findUser;
  }
}
