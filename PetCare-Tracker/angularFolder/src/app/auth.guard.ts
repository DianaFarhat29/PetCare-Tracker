import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './services/auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (localStorage.getItem('userLoggedIn')) {
      console.log(localStorage.getItem('userLoggedIn'));
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
