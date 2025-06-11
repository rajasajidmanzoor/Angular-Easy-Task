import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Task } from 'src/app/datatypes.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  standalone: false,
})
export class TaskComponent {
  @Input({ required: true }) task!:Task;
  @Output() complete = new EventEmitter();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
