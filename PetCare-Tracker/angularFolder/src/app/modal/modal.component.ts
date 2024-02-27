import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { OwnerService } from '../services/owner-service';
import { OwnerModel } from '../owner-model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl, NgForm, Validators } from '@angular/forms';
import {Owner} from "../owner";

@Component(
  {
    selector: 'app-modal',

    templateUrl: './modal.component.html',
    imports: [
      ReactiveFormsModule
    ],
    standalone: true
  })
export class ModalComponent {
  users: Owner[] = [];

  //user: Owner = new OwnerModel();
  //Déclarer un objet formulaire de type FormGroup
  //Les données vont être stockées ici
  userFormGroup!: FormGroup;


  //injecter Modal et le FormBuilder dans le constructeur
  constructor(
    public modalRef: MdbModalRef<ModalComponent>,
    private fb: FormBuilder,
    private userService: OwnerService,
    private router: Router,
    public activeRoute: ActivatedRoute
  ) {
  }


  //Créer un formGroup
  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      id: [''],
      lName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-Za-z ]+$')]],
      fName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-Za-z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      noTel: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      role: ['']
    });


  }


}
