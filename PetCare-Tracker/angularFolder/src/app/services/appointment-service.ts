import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, tap} from "rxjs";
import {Animal} from '../animal';
import { AnimalModel } from '../animal-model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animalsUrl: string;

  constructor(private http: HttpClient) {
    this.animalsUrl = 'http://localhost:8080/api/owners/findAll';
  }



}
