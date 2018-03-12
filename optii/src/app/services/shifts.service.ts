import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user';
import 'rxjs/add/operator/map';
import { Shift } from '../models/shift';

@Injectable()
export class ShiftsService {
shifts: Shift[];
  constructor( private _http: Http) { }
  getAllShifts() {
    const _url = 'http://localhost:3000/api/shifts';
    return this._http.get(_url).map(res => res.json());
}
}
