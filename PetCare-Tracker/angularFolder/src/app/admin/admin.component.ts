import {Component, OnInit} from '@angular/core';
import { OwnerService } from '../services/owner-service';
import {OwnerModel} from "../owner-model";
import {NgForOf, NgIf} from "@angular/common";
import {Owner} from "../owner";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    RouterLinkActive],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
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
