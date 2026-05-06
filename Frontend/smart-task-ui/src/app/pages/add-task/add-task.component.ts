import { Component } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {

  task: Task = {
    title: '',
    priority: 'LOW',
    status: 'PENDING',
    dueDate: ''
  };

  constructor(private service: TaskService) {}

  addTask() {
    this.service.addTask(this.task).subscribe(() => {
      alert("Task Added Successfully");
      this.task = {
        title: '',
        priority: 'LOW',
        status: 'PENDING',
        dueDate: ''
      };
    });
  }
}