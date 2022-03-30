
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../environement/environement';
import { IProjet } from '../entities/projet-reference';

const baseUrl = environment.urlProject;

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<IProjet[]>(`${baseUrl}/dto`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/dto/getById/${id}`);
  }

  getByName(name: string): Observable<any> {
    console.log(`${baseUrl}/dto/getByName/${name}`)
    return this.http.get(`${baseUrl}/dto/getByName/${name}`);
  }
}