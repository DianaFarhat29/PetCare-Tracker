import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {Owner} from "../owner";
import {AuthService} from "../services/auth-service";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}



  ngOnInit(): void {
    let loginData =

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    if(this.authService.isLoggedIn()) {
      console.log(localStorage.getItem('token'));
      this.router.navigate(['/admin']);
      }
  }


  onSubmit(): void {
    const loginData = {
      email: this.loginForm.value['email'],
      password: this.loginForm.value['password']
    };

    this.authService.login(loginData.email, loginData.password).subscribe({
      next: (response) => {
        if (response.role === 'Admin') {
          localStorage.setItem('role', 'Admin');
          this.router.navigate(['/admin']);
        } else if (response.role === 'Owner') {
          localStorage.setItem('role', 'Owner');
          this.router.navigate(['/tableau-de-bord']);
        }
      },
      error: (error) => {
        console.error('Erreur de connexion', error);
        alert('Courriel/Mot de passe invalide. Veuillez réessayer.');
      }
    });
  }
}
