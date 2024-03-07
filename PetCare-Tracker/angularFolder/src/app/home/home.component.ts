import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";
import {AnimalService} from "../services/animal-service";
import {HttpClient} from "@angular/common/http";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  imports: [
    CommonModule,
    RouterModule,
  ],

})

export class HomeComponent {

  constructor(private animalService: AnimalService, private http: HttpClient, private router: Router) {}

  openCreateAccountDialog() {
    this.router.navigate(['/add-owner']);
  }

  openLoginDialog() {
    this.router.navigate(['/login']);
  }

}
