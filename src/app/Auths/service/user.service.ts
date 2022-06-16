import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // getAll() {
  //     return this.http.get<User[]>(`${environment.baseApiUrl}/users`);
  // }

  // getById(id: number) {
  //     return this.http.get<User>(`${environment.baseApiUrl}/users/${id}`);
  // }
}