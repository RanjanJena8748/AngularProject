import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import { Cleannesslevel } from '../models/cleannesslevel';

@Injectable()
export class CleannesslevelService {
  constructor(private _http: HttpClient) { }
  getCleannessLevel() {
    const _url = 'http://localhost:3000/api/cleannesslevel';
    // return this._http.get(_url).map(res => res.json());
    return this._http.get<Cleannesslevel[]>(_url);
  }

}
