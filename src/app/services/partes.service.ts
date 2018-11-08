import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class PartesService {

  constructor(private rest:RestService) { }

  getCapitulo(idCapitulo){
    return this.rest.getRest('capitulos/consultar/'+idCapitulo+'/?full=1')
  }

  getPartes(idCapitulo,idUsuario):any{
    return this.rest.getRest('partes/partesUsuarios/'+ idCapitulo+'/'+idUsuario+'/?full=1')
    }
  getTiempoCapitulo(idCapitulo,idUsuario){
    return this.rest.getRest('partes/sumar/'+ idCapitulo+'/'+idUsuario+'/?full=1')
  }
  convertToUnix(fecha,hora){
    const fechaHora = `${fecha}T${hora}Z`
    const unix = new Date (fechaHora)
    return unix.getTime();
  }
  convertToDate(unix){
    const date = new Date(unix)
    return date.getFullYear() +'-'+(date.getMonth()+1)+'-'+date.getDate()
  }
  convertToTime(unix){
    const date = new Date(unix)
    const hora = ('0' + date.getHours() ).slice(-2)
    const minutos = ('0' + date.getMinutes()).slice(-2)
    return hora + ':' + minutos ;
  }

}
