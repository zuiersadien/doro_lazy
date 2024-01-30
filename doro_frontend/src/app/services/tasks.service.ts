import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos`);
  }
}
