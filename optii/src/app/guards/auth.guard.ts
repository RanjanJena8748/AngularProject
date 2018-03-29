import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      this.authService.getLogin().subscribe(data => {
        console.log(data);
        if (data) {
          if (data.loggedIn === true) {
            return true;
          } else {
            this.router.navigate(['login']);
          }
        }
      });
    }
  }
}
