import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { PartesService } from '../../services/partes.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.css']
})
export class PartesComponent implements OnInit {
  editParte:any
  FechaHora:any
  idCapitulo:number
  partes:any []
  idUsuario =1
  totalTiempo:Number
  edit:boolean = false
  capitulo:any
  constructor( private router: ActivatedRoute, private rest: RestService, private _partes:PartesService) { 
    this.FechaHora = {}
    this.editParte = {}
    this.router.params.subscribe(params =>{
      this.idCapitulo = params['id']
    })
    this.getCapitulo()
    this.getPartes()
    this.getTiempoCapitulo()
  }

  ngOnInit() {
    this.FechaHora.fecha = Date.now();
    console.log(this.FechaHora.fecha);
    
  }
onFileSelected(event){
  console.log(event);
  
}

getPartes(){
  this._partes.getPartes(this.idCapitulo,this.idUsuario).subscribe(
    data =>{
      this.partes = data.data
    }
  )
   
}
getTiempoCapitulo(){
  this._partes.getTiempoCapitulo(this.idCapitulo,this.idUsuario).subscribe(
    data =>{
      this.totalTiempo = data.data.suma.total;
    }
  )
}




addParte(){
  let parte:any
  this.editParte.finicio = `${this.FechaHora.finicio}`
  this.editParte.ffinal = `${this.FechaHora.ffinal}`
  this.editParte.observacion = this.editParte.observacion
  this.editParte.idUsuario = this.idUsuario
  this.editParte.idCapitulo = this.capitulo.idCapitulo
  this.editParte.idObra  = this.capitulo.idObra
  this.editParte.status = 1
  this.rest.postRest('partes/crear/', this.editParte).subscribe(
    res =>{
      console.log(res);
      this.getPartes()
      this.getTiempoCapitulo()
      this.clearParteForm()
      }
  )
  this.edit = false
}
editSendToForm(parte){
  this.edit = true
  this.editParte = parte;
  this.FechaHora.finicio =  parte.finicio.replace(" ","T")
  this.FechaHora.ffinal = parte.ffinal.replace(" ","T")
  console.log('Enviado al formulario '+ parte.finicio, parte.ffinal);  
  
}
editSendToDb(){
let parte;
parte = this.editParte  
this.editParte.finicio = this.FechaHora.finicio.replace("T"," ")
this.editParte.ffinal = this.FechaHora.ffinal.replace("T"," ")
console.log('recogido del formulario '+ this.FechaHora.ffinal, this.FechaHora.finicio);
console.log(this.editParte);
let idp = this.editParte.idParte
this.clearParteForm()


this.rest.postRest('partes/actualizar/'+idp,this.editParte).subscribe(
  res =>{
    console.log(res)
    this.getPartes()
    this.getTiempoCapitulo()
    this.edit = false
    this.editParte = {}
    this.FechaHora = {}
  }
)


}


getCapitulo(){
  this._partes.getCapitulo(this.idCapitulo).subscribe(
    res =>{
      this.capitulo = res.data[0]
      console.log(this.capitulo)
    }
  )
}
desactivarParte(parte){
  this._partes.desactivarParte(parte).subscribe(
    res =>{
      this.getPartes()
    }
  )
  

}
clearParteForm(){
  delete this.editParte.idParte
delete this.editParte.timeStamp
delete this.editParte.tiempo
}
inicial(){
  console.log('ok');
  
}
}
