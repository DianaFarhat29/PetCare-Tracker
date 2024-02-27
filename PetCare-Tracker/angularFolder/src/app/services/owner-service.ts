import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {OwnerModel} from '../owner-model';
import {Owner} from "../owner";

@Injectable({
  providedIn: 'root',
})
export class OwnerService {

  private apiUrl= 'http://localhost:8080/api/owners';

  constructor(private httpClient: HttpClient,) {}


  getOwners(): Observable<Owner[]> {
    return this.httpClient.get<Owner[]>(this.apiUrl);
  }


  addOwner(owner: Owner): Observable<Owner> {
    const headers = new HttpHeaders({'Content-type': 'application/json'})
    return this.httpClient.post<Owner>(this.apiUrl, owner, {headers});
  }


  updateOwner(id: number, owner: Owner): Observable<Owner> {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.httpClient.put<Owner>(`${this.apiUrl}/${id}`, owner, {headers});
  }


  deleteOwner(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/owners/${id}`);
  }
}
