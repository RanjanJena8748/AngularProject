import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskList } from '../models/tasklist';

@Injectable()
export class TasklistService {

  constructor(private http: HttpClient) { }

  getTasklist() {
    return this.http.get<TaskList[]>('http://localhost:3000/api/tasklists');
  }

}
