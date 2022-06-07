import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { authenticationResponse,userCredentials} from '../model/security.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseApiUrl = environment.baseApiUrl;

  private readonly tokenKey = 'token';
  private readonly expirationTokenKey = 'token-expiration';
  private readonly roleField = 'role';
  private readonly userName = 'name';
  constructor(
      private http: HttpClient,
      private router: Router // private jwtHelper: JwtHelperService
  ) {}

  getUsers(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<User[]>(`${this.baseApiUrl}users`, {
      observe: 'response',
      params,
    });
  }

  changeRole(id: string, role: string[]) {
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.put(`${this.baseApiUrl}users/role/${id}`, role, {
      headers,
    });
  }

  changeStatus(id: string, status: boolean) {
    return this.http.put(`${this.baseApiUrl}users/lock/${id}`, status);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);

    if (!token) {
      return false;
    }

    // const expiration = localStorage.getItem(this.expirationTokenKey);
    // const expirationDate = new Date(expiration);

    // if (expirationDate <= new Date()) {
    //   this.logout();
    //   return false;
    // }

    return true;
  }

  getFieldFromJWT(field: string) {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      return '';
    }
    const dataToken = JSON.parse(atob(token.split('.')[1]));
    const role = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/';
    const name = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/';
    if (field == 'role') {
      return dataToken[role + field];
    }else if (field == 'name') {
      return dataToken[name + field];
    }
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationTokenKey);
    this.router.navigateByUrl('/login');
  }

  getRole(): string {
    return this.getFieldFromJWT(this.roleField);
  }

  getUserName(): string {
    return this.getFieldFromJWT(this.userName);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.baseApiUrl + 'authentication', user);
  }

  login(userCredentials: userCredentials): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(
      this.baseApiUrl + 'authentication/login',
      userCredentials
    );
  }

  saveToken(authenticationResponse: authenticationResponse) {
    localStorage.setItem(this.tokenKey, authenticationResponse.token);
    localStorage.setItem(
      this.expirationTokenKey,
      authenticationResponse.expiration.toString()
    );
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
