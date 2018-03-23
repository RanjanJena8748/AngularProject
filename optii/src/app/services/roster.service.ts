import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Roster } from '../models/roster';
import { Headers } from '@angular/http';

@Injectable()
export class RosterService {

  constructor(private http: HttpClient) { }
  getRoster() {
    const _url = 'http://localhost:3000/api/roster';
    return this.http.get<Roster[]>(_url);
  }
  saveRoster(newRoster: Roster) {
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http.post('http://localhost:3000/api/roster', newRoster, { headers: headers });
  }
}
