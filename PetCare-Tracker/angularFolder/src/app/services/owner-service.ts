import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {OwnerModel} from '../owner-model';
import {Owner} from "../owner";

@Injectable({
  providedIn: 'root',
})
export class OwnerService {

  private apiUrl= 'http://localhost:8080/api/owners/findAll';

  constructor(private httpClient: HttpClient) {}


  getOwners(): Observable<Owner[]> {
    return this.httpClient.get<Owner[]>(this.apiUrl)
      .pipe(
        tap(data => console.log('Fetched owners:', data)) // Log for inspection
      );
  }

  addOwner(owner: Owner): Observable<Owner> {
    const headers = new HttpHeaders({'Content-type': 'application/json'})
    return this.httpClient.post<Owner>(`http://localhost:8080/api/owners/create`, owner, {headers});
  }

  updateOwner(owner: Owner): Observable<Owner> {
    return this.httpClient.put<Owner>(`http://localhost:8080/api/owners/update/${owner.id}`, owner);
  }

  deleteOwner(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/owners/${id}`);
  }

  getOwnerById(ownerId: number | undefined) {
    return this.httpClient.get<Owner>(`http://localhost:8080/api/owners/${ownerId}`);
  }
}
