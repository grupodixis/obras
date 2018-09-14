import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { RestService } from '../../services/rest.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Console } from '../../../../node_modules/@angular/core/src/console';

@Component({
  selector: 'app-editar-obra',
  templateUrl: './editar-obra.component.html',
  styleUrls: ['./editar-obra.component.css']
})
export class EditarObraComponent implements OnInit {
idObra: number;
obras: any;
capitulos: any;
  constructor(private router: ActivatedRoute, private rest: RestService ) {
    this.router.params.subscribe(params => {
      this.idObra = params['id'];
      console.log(this.idObra);
    });

    this.getObra();
    this.getCapitulos();
  }

  activarObra() {
    this.obras.status = !this.obras.status;
    console.log(this.obras.status);
  }

  getObra() {
    this.rest.getRest('obras/' + this.idObra )
      .subscribe(data => {
        this.obras = data.data[0];
    } );
  }

  getCapitulos() {
    this.rest.getRest('tareas/' + this.idObra )
      .subscribe(data => {
        this.capitulos = data.data;
    } );
  }


  ngOnInit() {
  }

}
