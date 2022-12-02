import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

import { GoogleAuthProvider} from '@angular/fire/auth'
import { FirebaseApp } from '@angular/fire/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth, private router :Router) {
//    alert("I am here")
   }

  // login mehtod
  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(res=>
    {
       localStorage.setItem('token','true');
       if(res.user?.emailVerified==true){
        this.router.navigate(['/dashboard']);
       }else {
        this.router.navigate(['/verify-email']);
       }

    },err=>{
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }

  //register method

  register(email:string, password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(res=>{
     alert('Registration is successful.');
      this.router.navigate(['/login']);
      this.sendEmailforVerification(res.user)
    },
    err=>{
      this.router.navigate(['/register']);
    })
  }

  signwithGoogleAuth(){
    this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res=>{
      this.router.navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
    })
  }
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },err=>{
      alert(err.message)
    })
  }

  //forgot password
  forgotPassword(email :string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
     this.router.navigate(["/verify-email"]);
    },err =>{
      alert("somehting went wrong.")
    });

  }

  //verify email
  sendEmailforVerification(user:any){
  user.sendEmailVerification().then(()=>{
    this.router.navigate(["/verify-email"])
  },()=>{
    alert("something wrong");
  })
  }
}
