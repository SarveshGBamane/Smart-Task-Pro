import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  suggestion: string = '';
  analytics: any;

  constructor(private service: TaskService) {}

  ngOnInit() {
    this.service.getSuggestion().subscribe(res => {
      this.suggestion = res;
    });

    this.service.getAnalytics().subscribe(res => {
      this.analytics = res;
    });
  }
  getPieChart(): string {
  if (!this.analytics?.total) return '#e5e7eb';

  const completedPercent = (this.analytics.completed / this.analytics.total) * 100;

  return `conic-gradient(
    #22c55e 0% ${completedPercent}%,
    #eab308 ${completedPercent}% 100%
  )`;
}
}