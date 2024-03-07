import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {OwnerModel} from "../owner-model";
import { OwnerService } from "../services/owner-service";
import {Owner} from "../owner";

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    NgForOf,
    NgIf
  ],
  standalone: true
})



export class AddOwnerComponent implements OnInit{
  registerForm!: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private ownerService: OwnerService,
      private http: HttpClient,
      private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      noTel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const userData = {
      firstName: this.registerForm.value['firstName'],
      lastName: this.registerForm.value['lastName'],
      email: this.registerForm.value['email'],
      noTel: this.registerForm.value['noTel'],
      password: this.registerForm.value['password'],
      role: 'Owner'
    };

    this.http.post('http://localhost:8080/api/owners/create', userData)
      .subscribe(
    response => {
      // Handle successful appointment creation
      console.log('Owner created successfully:', response);
      alert('Propriétaire crée avec succès!');
      this.router.navigate(['/login']);

    },
      error => {
        // Handle errors during owner creation
        console.error('Erreur lors de ajout du owner', error);
        alert('Erreur lors de l\'ajout du propriétaire. Veuillez réessayer.');
      }
      );
  }

}
