import { Component } from '@angular/core';
import { Filme } from '../models/filme-model';

@Component({
  selector: 'mov-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  filmes: Filme[] = [
    {id: 1, nome: "Batman", img: "assets/img/batman.jpg", categoria: "ação"},
    {id: 1, nome: "Jhon Wick 4", img: "assets/img/john-wick.jpg", categoria: "ação"},
    {id: 1, nome: "Pulp fiction", img: "assets/img/pulp-fiction.jpg", categoria: "ação"},
    {id: 2, nome: "Billi Pig", img: "assets/img/billi-pig.jpg", categoria: "comédia"},
    {id: 2, nome: "Minha mãe é uma peça", img: "assets/img/minha-mae-e-uma-peça.jpg", categoria: "comédia"},
    {id: 3, nome: "maligno", img: "assets/img/maligno.jpg", categoria: "terror"},
    {id: 3, nome: "a morte do demonio", img: "assets/img/morte-do-demonio.jpg", categoria: "terror"},
    {id: 4, nome: "infantil", img: "assets/img/era-do-gelo-4.jpg", categoria: "infantil"},
    
  
  ]

}
