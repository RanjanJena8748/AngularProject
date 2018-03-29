import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Message } from '../../models/message';
import { Router } from '@angular/router';
import { FlashMessage } from 'angular-flash-message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: Message;
  username: string;
  password: string;
  constructor(private authService: AuthService, private router: Router, private flashMessage: FlashMessage) { }

  ngOnInit() {
  }
  login() {
    const user = {
      username: this.username,
      password: this.password
    };
    this.authService.authenticateUser(user).subscribe(data => {
      console.log(data);
    });
  }
}
