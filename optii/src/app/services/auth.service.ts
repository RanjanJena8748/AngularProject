import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../models/message';

@Injectable()
export class AuthService {
  private loggedInStatus = false;
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }
  constructor(private http: HttpClient) { }
  authenticateUser(user) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Message>('http://localhost:3000/api/auth', user, { headers: headers });
  }



  getUserDetails(username, password) {
    return this.http.post<Message>('http://localhost:3000/api/auth', {
      username, password
    });
  }
  getLogin() {
    return this.http.get<Message>('http://localhost:3000/api/auth');
  }
}
