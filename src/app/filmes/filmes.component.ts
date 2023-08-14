import { Component } from '@angular/core';
import { Filme } from '../models/filme-model';

@Component({
  selector: 'mov-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  filmes: Filme[] = [
    {id: 1, nome: "Batman", img: "assets/img/batman.jpg"},
    {id: 1, nome: "Jhon Wick 4", img: "assets/img/john-wick.jpg"},
    {id: 2, nome: "Billi Pig", img: "assets/img/billi-pig.jpg"},
    {id: 2, nome: "Minha mãe é uma peça", img: "assets/img/minha-mae-e-uma-peça.jpg"},
  ]

}
