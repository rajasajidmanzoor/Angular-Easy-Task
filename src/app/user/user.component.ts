import { Component, OnInit } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  random:number = 0;
  selectedUser: any = '';
  constructor() { 
    this.randomUser();
  }

  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }

  onSelectUser()  {
    console.log('Selected user:');
    this.randomUser();
  }
  randomUser() {
    this.random = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[this.random]
  }
  ngOnInit(): void {
    
  }

}
