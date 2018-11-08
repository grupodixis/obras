import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { PartesService } from '../../services/partes.service';

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
  //let parte:any
  this.editParte.inicio = this._partes.convertToUnix(this.FechaHora.fecha,this.FechaHora.inicio)
  this.editParte.final = this._partes.convertToUnix(this.FechaHora.fecha,this.FechaHora.final)
  this.editParte.observacion = this.editParte.observacion
  this.editParte.idUsuario = this.idUsuario
  this.editParte.fecha = this.FechaHora.fecha
  this.editParte.idCapitulo = this.capitulo.idCapitulo
  this.editParte.idObra  = this.capitulo.idObra
  this.rest.postRest('partes/iniciar/', this.editParte).subscribe(
    res =>{
      console.log(res);
      }
  )
  this.edit = false
  this.getPartes()
  this.getTiempoCapitulo()
}
editSendToForm(parte){
  this.edit = true
  this.editParte = parte;
  this.FechaHora.fecha =  this._partes.convertToDate(parseInt( parte.inicio)).toString().slice(0,10)
  //console.log(this.FechaHora.fecha)
  this.FechaHora.inicio = this._partes.convertToTime(parseInt( parte.inicio))
  this.FechaHora.final = this._partes.convertToTime(parseInt( parte.final))
}
editSendToDb(){
let parte;
parte = this.editParte  
parte.inicio = this._partes.convertToUnix(this.FechaHora.fecha,this.FechaHora.inicio)
parte.final = this._partes.convertToUnix(this.FechaHora.fecha,this.FechaHora.final)
delete parte.fecha
delete parte.tiempo
delete parte.timeStamp
console.log(this.editParte);
this.rest.postRest('partes/actualizar/'+this.editParte.idParte,this.editParte).subscribe(
  res =>{
    console.log(res)
    this.getPartes()
    this.getTiempoCapitulo()
    this.edit = false
  }
)


}
//capitulos/consultar/29?full=1

getCapitulo(){
  this._partes.getCapitulo(this.idCapitulo).subscribe(
    res =>{
      this.capitulo = res.data[0]
      console.log(this.capitulo)
    }
  )
}

}
