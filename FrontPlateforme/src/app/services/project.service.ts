
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IProject } from '../entities/project-reference';
import {environment} from "../../environments/environment";
import {urls} from "../../urls";


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<IProject[]>(environment.apiUrl + urls.project.get.all);
  }

  getById(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + urls.project.get.byId + id);
  }

  getByName(name: string): Observable<any> {
    return this.http.get(environment.apiUrl + urls.project.get.byName + name);
  }

  public createProject(project: IProject){
    return this.http.post(environment.apiUrl + urls.project.create, project);
  }
}
