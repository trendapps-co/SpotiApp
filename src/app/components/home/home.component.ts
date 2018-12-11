import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

 usuarios: Usuario[] = [];
 info:any[]=[];

  constructor( private http: HttpClient) {
    this.http.get('https://getmystyle.herokuapp.com/Users')
    .subscribe( (resp: any ) => {
      this.info = resp.message;
      for (const key in this.info) {
        if (this.info.hasOwnProperty(key)) {
          const element = this.info[key];
          // console.log(element.email);
          this.usuarios.push({name: element.name, email: element.email});
        }
      }


    });

    console.log(this.usuarios);
   }

  ngOnInit() {
  }


}

export interface Usuario {
  name: string;
  email: string;
}
