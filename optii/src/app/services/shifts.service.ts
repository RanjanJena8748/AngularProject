import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import 'rxjs/add/operator/map';
import { Shift } from '../models/shift';

@Injectable()
export class ShiftsService {
  constructor( private _http: HttpClient) { }
  getAllShifts() {
    const _url = 'http://localhost:3000/api/shifts';
    return this._http.get<Shift[]>(_url);
}
}
