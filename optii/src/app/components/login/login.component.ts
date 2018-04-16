import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Message } from '../../models/message';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: Message;
  username: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log('ranjan');
    const user = {
      username: this.username,
      password: this.password
    };
    this.authService.authenticateUser(user).subscribe(data => {
      console.log(data);
    });
  }
}
