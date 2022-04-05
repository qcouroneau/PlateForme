
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import {urls} from "../../urls";
import {ITask} from "../entities/task-reference";
import {IUser} from "../entities/user-reference";


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<IUser[]>(environment.apiUrl + urls.user.get.all);
  }

}
