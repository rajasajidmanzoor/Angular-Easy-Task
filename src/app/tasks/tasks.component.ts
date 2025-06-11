import { Component, Input } from '@angular/core';
import { type NewTaskData, type User } from '../datatypes.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone: false
})
export class TasksComponent {
  isAddingTask:boolean = false;
  @Input({ required: true }) user!: User;

  constructor( private tasksService: TasksService) {
    
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onCompleteTask(taskId: string) {
    console.log(`Task with ID ${taskId} completed!`);
    // Here you would typically handle the completion of the task, e.g., updating the task status
    this.tasksService.removeTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseTaskModal(event:any) {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
  //   this.tasksService.addTask(taskData, this.user.id);
  //   this.isAddingTask = false;
  // }
}
