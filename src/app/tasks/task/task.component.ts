import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  standalone: false,
})
export class TaskComponent {
  @Input({ required: true }) task!: any;
}
