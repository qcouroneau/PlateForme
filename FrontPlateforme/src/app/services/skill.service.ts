
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IProject } from '../entities/project-reference';
import {environment} from "../../environments/environment";
import {urls} from "../../urls";
import {ISkill} from "../entities/skill-reference";


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<ISkill[]>(environment.apiUrl + urls.skill.get.all);
  }

}
