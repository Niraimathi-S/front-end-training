import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockDB } from '../mockDB.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-my-network',
  templateUrl: './my-network.component.html',
  styleUrls: ['./my-network.component.css']
})
export class MyNetworkComponent implements OnInit {
  id:number = 0;
  users:Map<number,Person> = new Map<number,Person>();
  currentUser:any;
  constructor(private route:ActivatedRoute,private db:MockDB) { 
  }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get("id"));
    this.users =  this.db.USERS;
    this.currentUser = this.db.USERS.get(this.id)!;
  }
}
