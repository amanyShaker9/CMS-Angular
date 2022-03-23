import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms"
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public _AuthService:AuthService) { }

  ngOnInit(): void {
  }

//================================Validation part using reactive forms=============================
 signUpData=new FormGroup({
  userName:new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z][A-Za-z0-9_]{4,29}$/)]),
  //matched somthing@someserver.com
  userEmail:new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]),
  userPassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z a-z 1-9 ]{8}$/)]),
  ConfirmuserPassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z a-z 1-9 ]{8}$/)]),
  userType:new FormControl(),
 });

 //==================================================================================================

 //================================Dealing with Services=============================================
 SignUpAction(){
  //  console.log(this.signUpData.value)
  this._AuthService.signUp(this.signUpData.value).subscribe({
    next:(result)=>{
       console.log(result);
    }
  })

}


 //====================================================================================================

 


}
