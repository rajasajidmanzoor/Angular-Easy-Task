import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone: false,
})
export class TasksComponent {
  @Input({ required: true }) user: any;

}
