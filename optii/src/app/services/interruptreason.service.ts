import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { InterruptReason } from '../models/interruptreason';

@Injectable()
export class InterruptreasonService {
  interruptreasons: InterruptReason;
  constructor(private _http: Http) { }
  getInterruptReasons() {
    const _url = 'http://localhost:3000/api/interruptreasons';
    return this._http.get(_url).map(res => res.json());
  }
}
