import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private loginUrl = 'http://localhost:8080/api/owners/login';
  private user: any;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post<any>(this.loginUrl, credentials).pipe(
      tap((response: any) => {
        this.user = response; // Stock user data
        console.log('Utilisateur connecté:', this.user);
        localStorage.setItem('userId', this.user.id);
      })
    );
  }

  isLoggedIn(): boolean {
    console.log(localStorage.getItem('userLoggedIn'));
    return!!this.user;
  }

  getUserId(): number | undefined {
    return this.user?.id;
  }

  logout() {
    localStorage.clear();
    this.user = null; // Erase user data
    this.router.navigate(['/']);
    console.log('Utilisateur déconnecté:', this.user);
  }

}
