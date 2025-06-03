import { Component,  EventEmitter, OnInit, Output, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users'; // Adjust the import path as necessary

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'easy-task';
  users: any[] = [];
  selectedUser?: any;

  ngOnInit(): void {
    this.users = this.getallUsers();
    // this.selectedUser?:any = null;
  }

  getallUsers() {
    return DUMMY_USERS;
  }

  onUserSelected(user: any) {
    console.log('User selected in AppComponent:', user);
    this.selectedUser = user;
  }
    
}
