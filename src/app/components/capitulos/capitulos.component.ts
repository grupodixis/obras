import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import {Capitulo} from '../../models/capitulo';
@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent implements OnInit {
capitulos: Capitulo[];
idObra: number;
url: string;
  constructor(private rest: RestService,
              private router: ActivatedRoute) {
   this.router.params.subscribe(params => {
    this.idObra = params['id'];
    this.url = 'obras/capitulos/' + params['id'] + '/?full=1';
    console.log(this.idObra);
   });
   this.rest.getRest(this.url).subscribe( data => {
      this.capitulos = data.data;
      console.log(this.capitulos);
    }

    );
   }

  ngOnInit() {
  }

}
