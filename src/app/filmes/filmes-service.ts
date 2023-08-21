import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Filme } from "../models/filme-model";
import { Observable, catchError } from "rxjs";
import { MOVIE_API } from "../app.api";
import { ErrorHandler } from "src/app/app.error-handler";

@Injectable()
export class FilmesService {

    constructor(private http: HttpClient) {};

    listMovie(id: number): Observable<Filme[]> {
        return this.http.get<Filme[]>(`${MOVIE_API}/movies?categoria=${id}`).pipe(catchError(ErrorHandler.handleError))
    }

}