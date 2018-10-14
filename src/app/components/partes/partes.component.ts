import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.css']
})
export class PartesComponent implements OnInit {
  editParte:any;
  FechaHora:any;
  idCapitulo:number;
  partes:any [];
  idUsuario =1;
  totalTiempo:Number;
  constructor( private router: ActivatedRoute, private rest: RestService) { 
    this.FechaHora = {}
    this.editParte = {}
    this.router.params.subscribe(params =>{
      this.idCapitulo = params['id']
    })
    this.getPartes()
    this.getTiempoCapitulo()
  }

  ngOnInit() {
  }

getPartes(){
  this.rest.getRest('partes/partesUsuarios/'+ this.idCapitulo+'/'+this.idUsuario+'/?full=1').subscribe(
    data =>{
      this.partes = data.data;
      console.log(this.partes)
    }
  )
   
}
getTiempoCapitulo(){
  this.rest.getRest('partes/sumar/'+ this.idCapitulo+'/'+this.idUsuario+'/?full=1').subscribe(
    data =>{
      this.totalTiempo = data.data.suma.total;
      console.log(this.totalTiempo)
    }
  )
}


convertToUnix(fecha,hora){
  const fechaHora = `${fecha}T${hora}Z`
  const unix = new Date (fechaHora).getTime()
  return unix;
  
}
convertToDate(unix){
  const date = new Date(unix)
  return date.getMonth()+1 +'/'+    date.getDate()+'/'+date.getFullYear()
}
convertToTime(unix){
  const date = new Date(unix)
  return date.getHours()-1 +':'+date.getMinutes();
}

addParte(){
  this.editParte.inicio = this.convertToUnix(this.FechaHora.fecha,this.FechaHora.inicio)
  this.editParte.final = this.convertToUnix(this.FechaHora.fecha,this.FechaHora.final)
  console.log(this.editParte);
  console.log(this.convertToDate(this.editParte.inicio));
  console.log(this.convertToTime(this.editParte.inicio));
  
  
  
}

}
