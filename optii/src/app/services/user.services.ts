import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    users: [User];
    constructor(private _http: Http) {

    }
    getUsers() {
        const _url = 'http://localhost:3000/api/users';
        return this._http.get(_url).map(res => res.json());
    }
}
