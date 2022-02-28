import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockDB } from '../mockDB.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private db:MockDB, private route:ActivatedRoute) { }

  id:number = 0;
  users:Map<number,Person> = new Map<number,Person>();
  currentUser:any;

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get("userId"));
    this.users =  this.db.USERS;
    this.currentUser = this.db.USERS.get(this.id)!;
  }

}
