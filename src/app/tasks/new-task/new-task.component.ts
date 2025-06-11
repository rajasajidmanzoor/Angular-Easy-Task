import { Component, Output, EventEmitter, signal, inject, Input } from '@angular/core';
import { type NewTaskData } from 'src/app/datatypes.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone: false
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closetaskmodal = new EventEmitter<void>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  private tasksService = inject(TasksService);

  onCancel() {
    this.closetaskmodal.emit();
  }
  onSubmit () {
    console.log('ddd');
    // this.add.emit({
    //   title: this.enteredTitle(),
    //   summary: this.enteredSummary(),
    //   date: this.enteredDate()  
    // });
    this.tasksService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    }, this.userId);
    this.closetaskmodal.emit();
  }
}
