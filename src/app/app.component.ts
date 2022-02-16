import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //atemplate:'<h2>{{title}}</h2>'
})
export class AppComponent {
  constructor(private db: AngularFireDatabase){}
 

  title = 'walktrack';
  uname: string="";
  pass:string="";

  vali(uname:any,pass:any):void{
    console.log("Username: "+uname+" \nPasssword: "+pass);
    var Fpass=this.getpass(uname);
    console.log('Fpass: '+Fpass);
    if(Fpass==pass){
    alert("hi "+uname);
    }
    else
    alert("Fuck you !!!");
  }
  getpass(uname:string):any{
    var val;
    this.db.object(`/${uname}/Password/`).valueChanges().subscribe(xx=>{
      console.log(`/${uname}/Password/`+ xx);
      val=xx
    })
    return "ccc"+val;
  }
}

