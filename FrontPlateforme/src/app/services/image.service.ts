import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { urls } from "src/urls";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

    constructor(private http: HttpClient) { }

    saveFile(image: FormData): Observable<any> {
      return this.http.post(environment.apiUrl + urls.image.create, image);
    }
}