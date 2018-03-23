import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckList } from '../models/job';

@Injectable()
export class JobService {

  constructor(private _http: HttpClient) { }
  getAllChecklist() {
    const _url = 'http://localhost:3000/api/jobs';
    return this._http.get<CheckList[]>(_url);
  }

}
