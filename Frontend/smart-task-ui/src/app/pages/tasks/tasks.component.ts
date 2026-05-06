import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private service: TaskService) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.service.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  deleteTask(id: number) {
    this.service.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

  markCompleted(task: Task) {

    const updatedTask: Task = {
      ...task,
      status: 'COMPLETED'
    };

    this.service.updateTask(updatedTask).subscribe(() => {
      this.loadTasks();
    });
  }
}