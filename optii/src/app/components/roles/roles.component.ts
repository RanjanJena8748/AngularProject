import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.services';
import { Role } from '../../models/role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers: [RoleService]
})
export class RolesComponent implements OnInit {
  roles: Role[];
  constructor(private roleServices: RoleService) { }

  ngOnInit() {
    return this.roleServices.getUserRole().subscribe(role => this.roles = role);
  }
}
