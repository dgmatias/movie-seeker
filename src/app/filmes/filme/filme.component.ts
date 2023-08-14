import { Component, Input } from '@angular/core';
import { Filme } from 'src/app/models/filme-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mov-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent {
  
  idUrl?: Number;

  constructor(private route: ActivatedRoute) { 
  }

  @Input() filme!: Filme;

  ngOnInit() {
    this.getId();
  }

  getId() {
    this.idUrl = Number(this.route.snapshot.paramMap.get("id"));
    // console.log(typeof(idUrl));
    // console.log(`O id dessa página é ${idUrl}`);
  }


}
