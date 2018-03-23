import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.services';
import { User } from '../models/user';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data.filter((user) => {
        return user.TypeRowActiveId === 0;
      });
    });
  }

}
