import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
restUrl = 'http://api.hamenorca.com/';
token = ""; //"bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJFTVBSRVNBIiwiYXVkIjoiQVVESUVOQ0lBIiwidWlkIjpudWxsLCJ1c2VyIjoicGFibG9EaXhpcyIsImVtYWlsIjpudWxsfQ.r9N59lbZgLiPqG1vKXZIdTcvkpxQmNBhOE5gArXdoG4";
  constructor(private http: HttpClient) {}


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
    }) 
  
    const restUri = this.restUrl + url;
    const data = JSON.stringify(datos);
    return this.http.post(restUri, data,{headers});
  }

  putRest(url, datos): any {
    const restUri = this.restUrl + url;
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    }) ;
    const data = JSON.stringify(datos);
    return this.http.put(restUri, data, {headers});
  }

  loggedIn(){
    return !!localStorage.getItem('authorization')  //return boolean
  }

  


}
