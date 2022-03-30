import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {urls} from "../urls";
import {Project} from "../app/model/project.model";

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  public createProject(project: Project){
    return this.http.post(environment.apiUrl + urls.project.create, project);
  }
}
