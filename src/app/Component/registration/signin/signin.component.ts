import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public _AuthService:AuthService,public _Router:Router) { }

  ngOnInit(): void {
  }
  signInData=new FormGroup({
    //matched somthing@someserver.com
    userEmail:new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]),
    userPassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z a-z 1-9 ]{8}$/)]),
   });

   SignInAction(){
    this._AuthService.signIn(this.signInData.value).subscribe({
      next:(result)=>{
         if(result.message=="doctorlogin"){
          //  this._Router.navigate('/doctor');
           console.log("Hi doctor")
         }else if(result.message=="adminlogin"){
          // this._Router.navigate('/admin');
           console.log("Hi admin")
         }else if(result.message=="patientlogin"){
           this._Router.navigate(['/patient/dashboard']);
          localStorage.setItem('currentUser',result.data);
         }
        },
      error:(e)=>{
          console.log("Ivalid Login ")
      }
    })
   }

}
