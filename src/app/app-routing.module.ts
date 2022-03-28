import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Component/admin/admin.component';
import { AddAppointmentComponent } from './Component/appointment/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './Component/appointment/edit-appointment/edit-appointment.component';
import { ViewAppointmentComponent } from './Component/appointment/view-appointment/view-appointment.component';

import { DoctorHomeComponent } from './Component/doctor/doctor-home/doctor-home.component';
import { DashboardComponent } from './Component/patient-dash-board/dashboard/dashboard.component';
import { SigninComponent } from './Component/registration/signin/signin.component';
import { SignupComponent } from './Component/registration/signup/signup.component';
const routes: Routes = [
  // registration Routing
  {path:'',redirectTo:'register',pathMatch:"full"},
  {path:'register',component:SignupComponent,pathMatch:"full"},
  {path:'login',component:SigninComponent,pathMatch:"full"},
  {path:'patient/dashboard',component:DashboardComponent ,pathMatch:"full"},
  {path:'Admin',component:AdminComponent ,pathMatch:"full"},

  //appointment Router
  {path:'appointment/add',component:AddAppointmentComponent,pathMatch:"full"},
  {path:'appointment/view',component:ViewAppointmentComponent ,pathMatch:"full"},
  {path:'appointment/edit',component:EditAppointmentComponent,pathMatch:"full"},



  {path:"patient",loadChildren:()=>import("./Component/patient/patient.module").then(m=>m.PatientModule)},
  {path:"doctor",loadChildren:()=>import("./Component/doctor/doctor.module").then(m=>m.DoctorModule)},
  {path:"client-service",loadChildren:()=>import("./Component/client-service/clientServise.module").then(m=>m.ClientServiceModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
