import {Component, Injectable, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {OwnerService} from "../services/owner-service";
import {Owner} from "../owner";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AnimalModel} from "../animal-model";
import {OwnerModel} from "../owner-model";
import {RouterLink, RouterLinkActive, Router} from "@angular/router";
import {AuthService} from "../services/auth-service";

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
  isEditingInfo: boolean = false;
  isEditingPassword: boolean = false;


  constructor(private ownerService: OwnerService, private authService: AuthService,private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    if(localStorage.getItem('role') !== 'Owner') {
      this.router.navigate(['/']);
    }
    const userId = (Number)(localStorage.getItem('userId'));
    const url = 'http://localhost:8080/api/user/' + userId;
    this.ownerService.getOwnerById(userId).subscribe(data => {
      this.owner = data;
      this.selectedOwner = this.owner;
    });
  }

  checkoutForm = this.formBuilder.group({
    // Animal checkoutForm
    firstName: [{value: '', disabled: true}, Validators.required],
    lastName: [{value: '', disabled: true}, Validators.required],
    email: [{value: '', disabled: true}, Validators.required],
    noTel: [{value: '', disabled: true}, Validators.required],
  });

  checkoutFormPassword = this.formBuilder.group({
    password: [{value: '', disabled: true}, Validators.required],
    newPassword: [{value: '', disabled: true}, Validators.required],
  });

  onEditButtonClick() {
    this.checkoutForm.enable();
    this.isEditingInfo = true;
  }

  onEditPasswordButtonClick() {
    this.checkoutFormPassword.enable();
    this.isEditingPassword = true;
  }

  deleteOwner(ownerId: number | undefined) {
    if (confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
      if (typeof ownerId === 'number') {
        console.log('Deleting animal with id:'+ ownerId);

        this.http.delete(`http://localhost:8080/api/owners/delete/${ownerId}`)
          .subscribe(

            response => {
              // Handle successful appointment deletion
              this.tempOwner = this.tempOwner.filter(a => a.id !== ownerId);
              console.log('Owner deleted successfully:', response);
              alert('Propriétaire supprimé avec succès!');
              this.router.navigate(['/']);

            }, error => {
              // Handle the error
              console.error('Error deleting owner:', error);
              alert('Erreur lors de la suppression du propriétaire. Veuillez réessayer.');
            });
      } else {
        console.error('Error deleting owner: owner ID is undefined.');
      }
    } else {
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
      password: owner.password,
      role: owner.role,
    }

    // Send request to update the owner
    this.ownerService.updateOwner(this.selectedOwner)
      .subscribe({
        next: response => {
          console.log("Modifications enregistrées avec succès :", response);
          alert('Modifications enregistrées avec succès.');
          this.submitted = true;
          window.location.reload();
        },
        error: error => {
          console.log("Erreur lors de l'enregistrement des modifications :", error);
          alert('Erreur lors de l\'enregistrement des modifications.');
          window.location.reload();
          // Gérer l'erreur ici
        }
      });
  }

  // OnSubmit button updates owner password
  onSubmitPassword(owner: Owner): void {
    console.log("owner ID : " + owner.id);
    // Check if id is defined
    if (!owner.id) {
      console.error("L'identifiant de l'owner n'est pas défini.");
      return;
    }

    if(this.checkoutFormPassword.value['password'] !== owner.password) {
      console.error("Le mot de passe actuel est incorrecte.");
      alert('Le mot de passe actuel est incorrecte.');
      return;
    }

    this.selectedOwner  = {
      id: owner.id,
      firstName: owner.firstName,
      lastName: owner.lastName,
      email: owner.email,
      noTel: owner.noTel,
      password: this.checkoutFormPassword.value['newPassword']? this.checkoutFormPassword.value['newPassword'] : owner.password,
      role: owner.role,
    }

    // Send request to update the owner
    this.ownerService.updateOwner(this.selectedOwner)
      .subscribe({
        next: response => {
          console.log("Modification du mot de passe enregistrée avec succès :", response);
          alert('Modification du mot de passe enregistrée avec succès.');
          this.submitted = true;
          window.location.reload();
          // this.selectedOwner = undefined;
        },
        error: error => {
          console.log("Erreur lors de l'enregistrement de la modification du mot de passe:", error);
          alert('Erreur lors de l\'enregistrement de la modification du mot de passe.');
          window.location.reload();
          // Gérer l'erreur ici
        }
      });
  }

  cancel() {
    this.isEditingInfo = false;
    this.isEditingPassword = false;
    window.location.reload();
  }

  logout() {
    this.authService.logout();
  }
}
