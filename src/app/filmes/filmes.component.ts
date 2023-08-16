import { Component } from '@angular/core';
import { Filme } from '../models/filme-model';
import { FilmesService } from './filmes-service';

@Component({
  selector: 'mov-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  filmes: Filme[] = []

  constructor(private service: FilmesService) {}

  ngOnInit() {
    this.service.listMovie().subscribe(filmes => this.filmes = filmes)
  }

}
