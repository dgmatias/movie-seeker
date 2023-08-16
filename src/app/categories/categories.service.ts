import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs/internal/Observable";
import { Category } from "../models/category-model";
import { Injectable } from '@angular/core';
import { MOOVIE_API } from "../app.api";

@Injectable()
export class CategoriesServices {
    constructor(private http: HttpClient) {}

    listCategories():Observable<Category[]> {
        return this.http.get<Category[]>(`${MOOVIE_API}/categories`)
    }

}