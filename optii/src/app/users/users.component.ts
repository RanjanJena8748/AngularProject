import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.services';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private userservice: UserService) { }

  ngOnInit() {
    return this.userservice.getUsers().subscribe(users => this.users = users[0]);
  }

}
