import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';

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



export class AddOwnerComponent {
  owner: OwnerModel = new OwnerModel(0, '', '', '', '', '', '');


  constructor(private ownerService: OwnerService) { }



  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.ownerService.addOwner(form.value).subscribe((response) => {
      console.log(response);
      form.reset();
    });
  }





}
