import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { RestService } from '../../services/rest.service';
import { Capitulo } from '../../models/capitulo';



@Component({
  selector: 'app-editar-obra',
  templateUrl: './editar-obra.component.html',
  styleUrls: ['./editar-obra.component.css']
})
export class EditarObraComponent implements OnInit {
idObra: number;
obras: any;
capitulos: Capitulo [];
nuevoCapitulo: any = {};

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
    this.actualizarObra();
  }

/* LECTURA DE DATOS */

  getObra() {
    this.rest.getRest('obras/consultar/' + this.idObra +'/?full=1' )
      .subscribe(data => {
        this.obras = data.data[0];
        console.log(this.obras);
        
    } );
  }

  getCapitulos() {
    this.rest.getRest('obras/capitulos/' + this.idObra  +'/?full=1' )
      .subscribe(data => {
        this.capitulos = data.data.reverse();
        console.log(this.capitulos);
        
    } );
  }

 /* AGREGAR NUEVOS DATOS */
  agregarCapitulo() {
    this.nuevoCapitulo.nombreObra = this.obras.nombreObra;
    this.nuevoCapitulo.idObra = this.obras.idObra;
    this.nuevoCapitulo.status = true;
    this.rest.postRest('capitulos/crear/', this.nuevoCapitulo).subscribe( 
      data => {
        console.log(data);
        this.nuevoCapitulo ={};
        this.getCapitulos();
      });
  }



/*    ACTUALIZAR DATOS */

  actualizarObra(){
    this.rest.putRest('obras/actualizar/'+ this.obras.idObra + '/', this.obras).subscribe(
      data =>{
        console.log(data);
        
      }
    )
  }

  actualizarCapitulo(capitulo){
    
    this.rest.putRest('capitulos/actualizar/'+capitulo.idCapitulo+'/',capitulo).subscribe( 
      data =>{
        console.log(data);
      });
  }

  


 /* BORRAR DATOS */
  borrarCapitulo(capitulo){
    this.rest.postRest('capitulos/desactivar/'+capitulo.idTarea+'/', capitulo).subscribe(data =>{
      console.log(data);
      this.getCapitulos();
    });
   
  }


  ngOnInit() {
  }

}
