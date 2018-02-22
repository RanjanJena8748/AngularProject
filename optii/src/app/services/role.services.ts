import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Role } from '../models/role';

@Injectable()
export class RoleService {
    roles: Role[];
    constructor(private _http: Http) { }
    getUserRole() {
        return this._http.get('http://localhost:3000/api/roles').map(res => res.json());
    }
}

