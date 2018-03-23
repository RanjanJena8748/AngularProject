import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.services';
import { User } from '../models/user';
import { RoleService } from '../services/role.services';
import { Role } from '../models/role';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [RoleService]
})
export class UsersComponent implements OnInit {
  users: User[];
  usercopy: User[];
  roles: Role[];
  userStatus = '';
  userrole = '';
  searchfilter = '';
  constructor(private userservice: UserService, private roleservice: RoleService) { }

  ngOnInit() {
    this.roleservice.getUserRole().subscribe(roles => {
      this.roles = roles.filter((role) => {
        return role.Active === true;
      });
    });
    this.userservice.getUsers().subscribe((users: User[]) => {
      this.users = users;
      this.usercopy = users;
    });
  }

  filter() {
    const searchedtext = this.searchfilter;
    const status = this.userStatus;
    const role = this.userrole;
    this.usercopy = this.users.filter(function (user) {
      if (status === '' && role === '') {
        return user;
      } else if (status === '' && role !== '') {
        return user.UserRoleId === Number(role);
      } else if (status !== '' && role === '') {
        return user.TypeRowActiveId === Number(status);
      } else {
         return user.TypeRowActiveId === Number(status) && user.UserRoleId === Number(role);
      }
    });
    if (searchedtext !== '') {
      this.usercopy = this.users.filter(function (user) {
        return user.firstname.includes(searchedtext);
      });
    }
  }

}
