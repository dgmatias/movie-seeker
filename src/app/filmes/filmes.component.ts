import { Component } from '@angular/core';
import { Filme } from '../models/filme-model';
import { FilmesService } from './filmes-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mov-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  filmes: Filme[] = []

  constructor(private service: FilmesService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.service.listMovie(this.route.snapshot.params['id']).subscribe(filmes => this.filmes = filmes)
  }

}
