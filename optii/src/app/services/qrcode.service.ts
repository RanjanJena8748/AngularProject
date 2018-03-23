import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QrCode } from '../models/qrcode';

@Injectable()
export class QrcodeService {

  constructor(private http: HttpClient) { }
  getAllQrcode() {
    const _url = 'http://localhost:3000/api/qrcodes';
   return this.http.get<QrCode[]>(_url);
  }

}
