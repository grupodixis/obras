import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
obras: any;

  constructor(private rest: RestService) {
    const url = 'http://api.pablosanchezweb.com/obras/';
    this.rest.getRest(url).subscribe( data => {
      this.obras = data.data;
      console.log(this.obras);
    }

    );
   }

  ngOnInit() {
  }

}
