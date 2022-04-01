import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { urls } from "src/urls";
import { ICategory } from "../entities/category-reference";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<ICategory[]>(environment.apiUrl + urls.category.get.all);
  }
}