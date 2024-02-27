import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

import {OwnerModel} from "../owner-model";
import { Router } from '@angular/router';
import {Owner} from "../owner";

@Component({
  selector: 'app-modal-connection',
  templateUrl: './modal-connection.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrl: './modal-connection.component.css'
})
export class ModalConnectionComponent {
  users: Owner[] = [];
  //Déclarer un objet formulaire de type FormGroup
  //Les données vont être stockées ici
  userFormGroup!: FormGroup;

  //injecter Modal et le FormBuilder dans le constructeur
  constructor(
    public modalRef: MdbModalRef<ModalConnectionComponent>,
    private fb: FormBuilder,

    private router:Router
  ) { }


  //Créer un formGroup
  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      email: this.fb.control(""),
      password: this.fb.control("")
    });

    // Charger les utilisateurs depuis le fichier JSON
    //  this.connectionService.loadUsers().subscribe(users => {
      //  this.users = users;
    //});
  }


  onSubmit() {
    const formValue = this.userFormGroup.value;
    const user = this.users.find(u => u.email === formValue.email && u.password === formValue.password);
    if (user) {      // Traiter la connexion réussie
      console.log('Connexion réussie', user);
      this.modalRef.close('Connexion réussie');
      this.router.navigate(['/suite']); // Utilisez la méthode navigate de Router


    } else {       // Traiter l'échec de la connexion
      console.log('Échec de la connexion');

    }
  }


  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }
}





