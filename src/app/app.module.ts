import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './Component/core/core.module';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { RegistrationModule } from './Component/registration/registration.module';
import { AppointmentModule } from './Component/appointment/appointment.module';
import { RouterModule, Routes } from '@angular/router';
import { DoctorModule } from './Component/doctor/doctor.module';
import { SignupComponent } from './Component/registration/signup/signup.component';
import { SigninComponent } from './Component/registration/signin/signin.component';
import { AddAppointmentComponent } from './Component/appointment/add-appointment/add-appointment.component';
import { ViewAppointmentComponent } from './Component/appointment/view-appointment/view-appointment.component';
import { EditAppointmentComponent } from './Component/appointment/edit-appointment/edit-appointment.component';
import { PatientDashBoardModule } from './Component/patient-dash-board/patient-dash-board.module';
import { DashboardComponent } from './Component/patient-dash-board/dashboard/dashboard.component';

const routes:Routes=[
  {path:'',redirectTo:'register',pathMatch:"full"},
  {path:'register',component:SignupComponent,pathMatch:"full"},
  {path:'login',component:SigninComponent,pathMatch:"full"},
  {path:'appointment/add',component:AddAppointmentComponent,pathMatch:"full"},
  {path:'appointment/view',component:ViewAppointmentComponent ,pathMatch:"full"},
  {path:'appointment/edit',component:EditAppointmentComponent,pathMatch:"full"},
  {path:'patient/dashboard',component:DashboardComponent ,pathMatch:"full"}

  
]
@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    NgbPaginationModule,
     NgbAlertModule,
     RegistrationModule,
     AppointmentModule,
     RouterModule.forRoot(routes),
     DoctorModule,
    PatientDashBoardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
