import { Injectable } from '@angular/core';
import { PauseReason } from '../models/pausereason';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class PausereasonService {
pausereason: PauseReason[];
  constructor(private _http: Http) { }
getpausereasons() {
  const _url = 'http://localhost:3000/api/pausereasons';
  return this._http.get(_url).map(res => res.json());
}
}
