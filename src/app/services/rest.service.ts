import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {
restUrl = 'http://api.pablosanchezweb.com/';
  constructor(private http: HttpClient) {}


  getRest(url): any {
    const restUri = this.restUrl + url;
    return this.http.get(restUri);
  }

  postRest(url, datos): any {
    const restUri = this.restUrl + url;
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    }) ;
    const data = JSON.stringify(datos);
    return this.http.post(restUri, data, {headers});
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

}
