import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs/internal/Observable";
import { Category } from "../models/category-model";
import { Injectable } from '@angular/core';
import { MOVIE_API } from "../app.api";
import { catchError } from "rxjs";
import { ErrorHandler } from "src/app/app.error-handler";

@Injectable()
export class CategoriesServices {
    constructor(private http: HttpClient) {}

    listCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${MOVIE_API}/categories`).pipe(catchError(ErrorHandler.handleError))
    }

}