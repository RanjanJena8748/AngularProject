import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cleannesslevel } from '../models/cleannesslevel';

@Injectable()
export class CleannesslevelService {
cleanlinesslevel: Cleannesslevel;
  constructor(private _http: Http) { }
  getCleannessLevel() {
    const _url = 'http://localhost:3000/api/cleannesslevel';
    return this._http.get(_url).map(res => res.json());
  }

}
