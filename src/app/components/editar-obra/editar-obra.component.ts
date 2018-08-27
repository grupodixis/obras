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
    this.rest.getRest('http://api.pablosanchezweb.com/obras/' + this.idObra )
      .subscribe(data => {
        this.obras = data.data[0];
        /*if (this.obras.status === 1) { this.obras.status = true; } else { this.obras.status = false; }*/
        console.log(this.obras);
    } );
    this.rest.getRest('http://api.pablosanchezweb.com/tareas/' + this.idObra )
      .subscribe(data => {
        this.capitulos = data.data;
        console.log(this.capitulos);
    } );
   }
  
  activarObra() {
    this.obras.status = !this.obras.status;
    console.log(this.obras.status);
    
  }


  ngOnInit() {
  }

}
