import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  dataLogin:any = {};

  constructor(private rest: RestService, private route:Router) {
   
  }

  login(){
    console.log(this.dataLogin);
    
    this.rest.loginRest("login/",this.dataLogin).subscribe(
      data => {
        if(data.token){
          localStorage.setItem('authorization', 'bearer '+data.token);
          this.route.navigate(['/administracion'])
        }else{
          this.route.navigate(['/login'])
          
        }

        
      }
    )
  }  
    ngOnInit() {
    }
}



