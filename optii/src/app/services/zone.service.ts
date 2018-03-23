import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Zone } from '../models/zone';

@Injectable()
export class ZoneService {

  constructor(private _http: HttpClient) { }
  getZonesAll() {
    const _url = 'http://localhost:3000/api/zones';
    return this._http.get<Zone[]>(_url);
  }
}
