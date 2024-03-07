import {Component, OnInit} from '@angular/core';
import { OwnerService } from '../services/owner-service';
import {OwnerModel} from "../owner-model";
import {NgForOf, NgIf} from "@angular/common";
import {Owner} from "../owner";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AnimalModel} from "../animal-model";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Animal} from "../animal";
import {AuthService} from "../services/auth-service";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  owners: Owner[] = [];
  public tempOwner: Owner[] = [];
  selectedOwner: OwnerModel | undefined;
  submitted = false;
  isEditingInfo: boolean = false;

  constructor(private ownerService: OwnerService, private authService: AuthService, private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }

  checkoutForm = this.formBuilder.group({
    // Animal checkoutForm
    firstName: [{value: '', disabled: true}, Validators.required],
    lastName: [{value: '', disabled: true}, Validators.required],
    email: [{value: '', disabled: true}, Validators.required],
    noTel: [{value: '', disabled: true}, Validators.required],
  });

  private apiUrl= 'http://localhost:8080/api/owners/findAll';


  ngOnInit() {
  if(localStorage.getItem('role') !== 'Admin') {
    this.router.navigate(['/']);
  }
    this.ownerService.getOwners().subscribe(data => {
      this.owners = data;
    }, error => { // Add error handling
      console.error('Error fetching owners:', error);
    });
  }

  private getOwners() {
    this.ownerService.getOwners().subscribe(data => {
      this.owners = data;
    });
  }
  deleteOwner(ownerId: number | undefined) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce compte ? Cette action est irréversible.")) {
      if (typeof ownerId === 'number') {
        console.log('Deleting owner with id:'+ ownerId);

        this.http.delete(`http://localhost:8080/api/owners/delete/${ownerId}`)
          .subscribe(

            response => {
              // Handle successful appointment deletion
              this.tempOwner = this.tempOwner.filter(a => a.id !== ownerId);
              console.log('Owner deleted successfully:', response);
              alert('Propriétaire supprimé avec succès.');
              window.location.reload();

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

  showOwnerDetails(owner: Owner) {
    this.selectedOwner = owner;

  }

  onEditButtonClick() {
    this.checkoutForm.enable();
    this.isEditingInfo = true;
  }

  cancel() {
    this.isEditingInfo = false;
    window.location.reload();
  }

  onSubmit(owner: OwnerModel): void {
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

        }
      });
  }

  logout() {
    this.authService.logout();
  }

}
