import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorHomeComponent } from './Component/doctor/doctor-home/doctor-home.component';
import { SigninComponent } from './Component/registration/signin/signin.component';
import { SignupComponent } from './Component/registration/signup/signup.component';
const routes: Routes = [
  {path:"doctor",loadChildren:()=>import("./Component/doctor/doctor.module").then(m=>m.DoctorModule)},
  {path:"client-service",loadChildren:()=>import("./Component/client-service/clientServise.module").then(m=>m.ClientServiceModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
