import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}
getRest(url): any {
  return this.http.get(url);
}

}
