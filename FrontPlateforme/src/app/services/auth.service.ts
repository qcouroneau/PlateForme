import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {IUser} from '../entities/user-reference';
import {environment} from "src/environments/environment";
import {urls} from "src/urls";
import {ICredential} from "../entities/credential-reference";
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})

export class AuthService {

  private loggedUserSubject: BehaviorSubject<IUser>;
  public loggedInUser: Observable<any>;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {
  }

  login(credentials: ICredential): Observable<any> {
    return this.http.post<any>(environment.apiUrl + urls.user.connection, credentials, httpOptions)
  }

  register(user: IUser): Observable<any> {
    return this.http.post(environment.apiUrl + urls.user.register, user, httpOptions);
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('auth-token');    // Check whether the token is expired and return
    return !this.jwtHelper.isTokenExpired(token);
  }

}
