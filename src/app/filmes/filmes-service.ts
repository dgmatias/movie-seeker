import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Filme } from "../models/filme-model";
import { MOVIE_API } from "../app.api";
import { ActivatedRoute } from "@angular/router";

@Injectable()
export class FilmesService {

    constructor(private http: HttpClient) {};

    listMovie(id: number):Observable<Filme[]> {
        return this.http.get<Filme[]>(`${MOVIE_API}/movies?categoria=${id}`)
    }

}