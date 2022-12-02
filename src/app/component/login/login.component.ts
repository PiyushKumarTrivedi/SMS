import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }
  email: string="";
  passwprd:string ="";
  ngOnInit(): void {
  }

  login(){
    if(this.email==""){
      alert("please enter email.")
      return;
    }
    if(this.passwprd==""){
      alert("pleae enter password.")
      return;
    }
    this.auth.login(this.email,this.passwprd);
    this.email="";
    this.passwprd="";
  }
  signinwithGoogle(){
  this.auth.signwithGoogleAuth();
  }
}
