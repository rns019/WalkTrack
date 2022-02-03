import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //atemplate:'<h2>{{title}}</h2>'
})
export class AppComponent {
  constructor(private router: Router){ }

  title = 'walktrack';
  uname: string="";
  pass:string="";
  vali(uname:any,pass:any):void{
    console.log("Username: "+uname+" \nPasssword: "+pass);
    if(uname==pass){
    alert("hi "+uname);
    }
    else
    alert("Fuck you");
  }
}
