import { Component } from '@angular/core';
import { ModalComponent} from '../modal/modal.component';
import { ModalConnectionComponent } from '../modal-connection/modal-connection.component';
import {UserAddEditComponent} from "../user-add-edit/user-add-edit.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  imports: [
    CommonModule,
    ModalComponent,
    ModalConnectionComponent,
    RouterModule,
  ],

})
export class HomeComponent {


  openCreateAccountDialog() {

  }

  openLoginDialog() {

  }
}
