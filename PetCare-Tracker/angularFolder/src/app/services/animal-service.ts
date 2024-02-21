import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../animal';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animalsUrl: string;

  constructor(private http: HttpClient) {
    this.animalsUrl = 'http://localhost:8080/animals';
  }

  getAnimals(userId: number): Observable<Animal[]> {
    return this.http.get<Animal[]>(`api/animals/user/${userId}`);
  }

  findAll(userId: number): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.animalsUrl}/user/${userId}`);
  }

  public save(userId: number) {
    return this.http.post<Animal>(this.animalsUrl, userId);
  }

}
