import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Task {
  id?: number;
  title: string;
  description?: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  status: 'PENDING' | 'COMPLETED';
  category?: string;
  dueDate: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:9092/tasks';

  constructor(private http: HttpClient) { }

  // GET all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  //  ADD task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  //  DELETE task
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  //  OVERDUE tasks
  getOverdueTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/overdue`);
  }

  //  SMART suggestion
  getSuggestion(): Observable<string> {
    return this.http.get(`${this.baseUrl}/suggestion`, { responseType: 'text' });
  }

  //  ANALYTICS
  getAnalytics(): Observable<any> {
    return this.http.get(`${this.baseUrl}/analytics`);
  }

  //Update Status
  updateTask(task: Task) {
  return this.http.put(`${this.baseUrl}/${task.id}`, task);
}
}