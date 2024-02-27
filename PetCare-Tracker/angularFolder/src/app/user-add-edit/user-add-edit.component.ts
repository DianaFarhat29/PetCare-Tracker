import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../services/owner-service';
import {OwnerModel} from "../owner-model";
import {NgForOf, NgIf} from "@angular/common";
import {Owner} from "../owner";
import {RouterLink, RouterLinkActive} from "@angular/router";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-add-edit.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    RouterLinkActive
  ],
  styleUrl: './user-add-edit.component.css'
})


export class UserAddEditComponent implements OnInit {
  owners: Owner[] = [];


  constructor(private ownerService: OwnerService,) { }

  ngOnInit() {
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

  deleteOwner(id: number): void {
    this.ownerService.deleteOwner(id).subscribe(() => {
      this.getOwners();
    });
  }

  openAddUserForm() {

  }
}




