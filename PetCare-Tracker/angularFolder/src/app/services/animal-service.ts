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
    this.animalsUrl = 'http://localhost:8080/api';
  }

  getAnimals(userId: number): Observable<Animal[]> {
    return this.http.get<Animal[]>(`<span class="math-inline">\{this\.animalsUrl\}/animals/user/</span>{userId}`);
  }

  public save(animal: Animal, ownerId: number): Observable<Animal> {
    const url = `${this.animalsUrl}?ownerId=${ownerId}`;
    return this.http.post<Animal>(url, animal);
  }

  findAll(url: string): Observable<Animal[]> {
    return this.http.get<Animal[]>(url).pipe(
      map((response: Animal[]) => response.map(item => this.deserializeAnimal(item)))
    );
  }

  private deserializeAnimal(data: any): Animal {
    return new AnimalModel(
      data.id,
      data.owner,
      data.name,
      data.race,
      data.gender,
      new Date(data.birthday),
      data.weight,
      data.height,
      data.healthCondition,
      new Date(data.lastVisit),
      data.notes,
      data.picture
    );
  }


}
