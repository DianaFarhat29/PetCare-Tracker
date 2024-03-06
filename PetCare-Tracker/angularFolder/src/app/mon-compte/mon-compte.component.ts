import {Component, Injectable, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {OwnerService} from "../services/owner-service";
import {Owner} from "../owner";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AnimalModel} from "../animal-model";
import {OwnerModel} from "../owner-model";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-mon-compte',
  standalone: true,
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './mon-compte.component.html',
  styleUrl: './mon-compte.component.css'
})
export class MonCompteComponent {
  private owner: Owner | undefined;
  selectedOwner!: OwnerModel;
  public tempOwner: Owner[] = [];
  submitted = false;

  ngOnInit() {
    const userId = 2; // Pour l'instant en dur
    const url = 'http://localhost:8080/api/user/' + userId;
    this.ownerService.getOwnerById(userId).subscribe(data => {
      this.owner = data;
      this.selectedOwner = this.owner;
    });
  }

  constructor(private ownerService: OwnerService, private http: HttpClient, private formBuilder: FormBuilder) {}

  checkoutForm = this.formBuilder.group({
    // Animal checkoutForm
    firstName: [{value: '', disabled: true}, Validators.required],
    lastName: [{value: '', disabled: true}, Validators.required],
    email: [{value: '', disabled: true}, Validators.required],
    noTel: [{value: '', disabled: true}, Validators.required],
    password: [{value: '', disabled: true}, Validators.required],
  });

  onEditButtonClick() {
    this.checkoutForm.enable();
  }

  deleteOwner(ownerId: number | undefined) {

    if (typeof ownerId === 'number') {
      console.log('Deleting animal with id:'+ ownerId);

      this.http.delete(`http://localhost:8080/api/owners/delete/${ownerId}`)
        .subscribe(

          response => {
            // Handle successful appointment deletion
            this.tempOwner = this.tempOwner.filter(a => a.id !== ownerId);
            console.log('Owner deleted successfully:', response);
            alert('Propriétaire supprimé avec succès!');

          }, error => {
            // Handle the error
            console.error('Error deleting animal:', error);
            alert('Erreur lors de la suppression du propriétaire. Veuillez réessayer.');
          });
    } else {

      console.error('Error deleting animal: Animal ID is undefined.');
    }
  }

  // OnSubmit button updates owner information
  onSubmit(owner: Owner): void {
    console.log("owner ID : " + owner.id);
    // Check if id is defined
    if (!owner.id) {
      console.error("L'identifiant de l'owner n'est pas défini.");
      return;
    }

    this.selectedOwner  = {
      id: owner.id,
      firstName: this.checkoutForm.value['firstName']? this.checkoutForm.value['firstName'] : owner.firstName,
      lastName: this.checkoutForm.value['lastName']? this.checkoutForm.value['lastName'] : owner.lastName,
      email: this.checkoutForm.value['email']? this.checkoutForm.value['email'] : owner.email,
      noTel: this.checkoutForm.value['noTel']? this.checkoutForm.value['noTel'] : owner.noTel,
      password: this.checkoutForm.value['password']? this.checkoutForm.value['password'] : owner.password,
      role: owner.role,
    }

    // Send request to update the owner
    this.ownerService.updateOwner(this.selectedOwner)
      .subscribe({
        next: response => {
          console.log("Modifications enregistrées avec succès :", response);
          this.submitted = true;
          // this.selectedOwner = undefined;
        },
        error: error => {
          console.log("Erreur lors de l'enregistrement des modifications :", error);
          // Gérer l'erreur ici
        }
      });
  }
}
