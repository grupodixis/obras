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
  desactivarParte(parte){
    let id:string
    id = 'partes/desactivar/'+parte.idParte
    console.log(id, parte);
    return this.rest.postRest(id ,parte)
  }
  

}
