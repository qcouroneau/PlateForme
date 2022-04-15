
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import {urls} from "../../urls";
import {IUser} from "../entities/user-reference";
import { IUserEdit } from '../entities/user-edit-reference';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<IUser[]>(environment.apiUrl + urls.user.get.all);
  }

  edit(user: IUserEdit): Observable<any> {
    return this.http.put(environment.apiUrl + urls.user.edit, user);
  }
}
