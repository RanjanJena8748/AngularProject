import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkingArrangement } from '../models/workingarrangement';

@Injectable()
export class WorkingarrangementService {

  constructor(private _http: HttpClient) { }

  getWorkingArrangement() {
    const _url = 'http://localhost:3000/api/workingarranements';
    return this._http.get<WorkingArrangement[]>(_url);
  }
}
