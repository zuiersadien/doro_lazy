import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  url = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get(this.url);
  }
  post(task: any) {
    const body = task;
    return this.http.post(this.url, body);
  }
  update(task: any) {
    const id = task.id;
    return this.http.patch(this.url + `/${id}`, task);
  }
}
