import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../models/device';

@Injectable()
export class DeviceService {

  constructor(private _http: HttpClient) { }
  getAllDevice() {
    const _url = 'http://localhost:3000/api/devices';
    return this._http.get<Device[]>(_url);
  }
}
