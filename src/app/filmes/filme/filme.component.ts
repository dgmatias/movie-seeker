import { Component, Input } from '@angular/core';
import { Filme } from 'src/app/models/filme-model';

@Component({
  selector: 'mov-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent {
  @Input() filme!: Filme;
}
