import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}


  getRest(url): any {
    return this.http.get(url);
  }

  postRest(url, datos): any {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    }) ;
    const data = JSON.stringify(datos);
    return this.http.post(url, data, {headers});
  }

  putRest(url, datos): any {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    }) ;
    const data = JSON.stringify(datos);
    return this.http.put(url, data, {headers});
  }

}
