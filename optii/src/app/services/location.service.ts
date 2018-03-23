import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../models/location';

@Injectable()
export class LocationService {

  constructor(private _http: HttpClient) { }
  getAllLocation() {
    const _url = 'http://localhost:3000/api/alllocationlist';
    return this._http.get<Location[]>(_url);
  }

}
