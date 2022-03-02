import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../appService.service';
import { Person } from '../models';

@Component({
  selector: 'app-my-network',
  templateUrl: './my-network.component.html',
  styleUrls: ['./my-network.component.css'],
})
export class MyNetworkComponent implements OnInit {
  private id: number = 0;
  public users!: Person[];
  public currentUser!: Person;
  public findUser: any;
  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.users = this.appService.getUsers();
    this.currentUser = this.appService.findUser(this.id)!;
    this.findUser = this.appService.findUser;
  }
}
