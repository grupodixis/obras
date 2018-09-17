import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent implements OnInit {
capitulos: any;
idObra: number;
url: string;
  constructor(private rest: RestService,
              private router: ActivatedRoute) {
   this.router.params.subscribe(params => {
    this.idObra = params['id'];
    this.url = 'tareas/' + params['id'];
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
