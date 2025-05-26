import { Component, OnInit, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { isStandalone } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: false,
})
export class UserComponent implements OnInit {
  random:number = 0;
  selectedUser: any = signal(DUMMY_USERS[0]); // Initialize Signal
  users: any[] = [];
  constructor() { 
    // this.randomUser();
  }

  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }

  onSelectUser(user:any)  {
    console.log('Selected user:');
    this.selectedUser.set(user) ; // Set value of the signal
    console.log(this.selectedUser()); // use as a method to get the value of the signal
    //this.randomUser();
  }
  randomUser() {
    this.random = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[this.random]
  }

  getallUsers() {
    return DUMMY_USERS;
  }
  getUserById(id: string) {
    return DUMMY_USERS.find(user => user.id === id);
  }   

  getUserbyName(name: string) {   
    return DUMMY_USERS.find(user => user.name === name);
  }
  ngOnInit(): void {
    this.users = this.getallUsers();
  }

}
