import { Component, EventEmitter, OnInit, Output, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { isStandalone } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: false,
})
export class UserComponent implements OnInit {
  @Input({ required: true }) users: any;
  @Output() select = new EventEmitter();

  constructor() { 
  }

  onSelectUser(user:any)  {
    // this.selectedUser.set(user) ; // Set value of the signal
    // console.log(this.selectedUser()); // use as a method to get the value of the signal
    this.select.emit(user);
  }

  ngOnInit(): void {
  }

}
