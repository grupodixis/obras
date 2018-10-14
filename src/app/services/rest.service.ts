import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {
restUrl = 'http://api.hamenorca.com/';
token:string;
  constructor(private http: HttpClient) {
    if (this.loggedIn) 
    this.token = localStorage.getItem('authorization');
  }

  loginRest(url, datos): any {
    let headers = new HttpHeaders({
      'Content-Type':  'application/json'
    }) 
    const restUri = this.restUrl + url;
    const data = JSON.stringify(datos);
    return this.http.post(restUri, data,{headers});
  }

  getRest(url): any {
    const restUri = this.restUrl + url;
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.token
    }) ;   
      this.http.get(restUri,{headers}).subscribe( data => {
        console.log(data);
        
      });
      
    return  this.http.get(restUri,{headers});

  }

  postRest(url, datos): any {
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.token
    }) 
  
    const restUri = this.restUrl + url;
    const data = JSON.stringify(datos);
    return this.http.post(restUri, data,{headers});
  }

  putRest(url, datos): any {
    const restUri = this.restUrl + url;
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.token
    }) ;
    const data = JSON.stringify(datos);
    return this.http.put(restUri, data, {headers});
  }

  loggedIn(){
    return !!localStorage.getItem('authorization')  //return boolean
  }
  logout(){
    localStorage.removeItem('authorization')

  }
  


}
