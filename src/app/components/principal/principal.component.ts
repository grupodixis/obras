import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  dataLogin:any = {};

  constructor(private rest: RestService) {
   
  }

  login(){
    console.log(this.dataLogin);
    
    this.rest.postRest("login/",this.dataLogin).subscribe(
      data => {
        console.log(data);
        
        localStorage.setItem('authorization', 'bearer '+data.token);
      }
    )
  }  
    ngOnInit() {
    }
}



