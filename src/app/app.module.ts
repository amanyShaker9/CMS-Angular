import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './Component/core/core.module';
import { MedicineListComponent } from './Component/medicine/medicine';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceModule } from './Component/invoice/invoice.module';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { RegistrationModule } from './Component/registration/registration.module';
import { AppointmentModule } from './Component/appointment/appointment.module';
import { RouterModule, Routes } from '@angular/router';
import { DoctorModule} from './Component/doctor/doctor.module';
import{ClientServiceModule}from './Component/client-service/clientServise.module'
import { SignupComponent } from './Component/registration/signup/signup.component';
import { SigninComponent } from './Component/registration/signin/signin.component';


import { PrescriptionModule } from './Component/prescription/prescription.module';

import { PaymentPageComponent } from './payment-page/payment-page.component';


import { AddAppointmentComponent } from './Component/appointment/add-appointment/add-appointment.component';
import { ViewAppointmentComponent } from './Component/appointment/view-appointment/view-appointment.component';
import { EditAppointmentComponent } from './Component/appointment/edit-appointment/edit-appointment.component';
import { PatientDashBoardModule } from './Component/patient-dash-board/patient-dash-board.module';
import { DashboardComponent } from './Component/patient-dash-board/dashboard/dashboard.component';
import { AdminComponent } from './Component/admin/admin.component';


const routes:Routes=[
  {path:'',redirectTo:'register',pathMatch:"full"},
  {path:'register',component:SignupComponent,pathMatch:"full"},
  {path:'login',component:SigninComponent,pathMatch:"full"},
  {path:'appointment/add',component:AddAppointmentComponent,pathMatch:"full"},
  {path:'appointment/view',component:ViewAppointmentComponent ,pathMatch:"full"},
  {path:'appointment/edit',component:EditAppointmentComponent,pathMatch:"full"},
  {path:'patient/dashboard',component:DashboardComponent ,pathMatch:"full"},


  // {path:'appointment/add',component:AddAppointmentComponent,pathMatch:"full"},
  // {path:'appointment/view',component:ViewAppointmentComponent ,pathMatch:"full"},
  // {path:'appointment/edit',component:EditAppointmentComponent,pathMatch:"full"},
  {path:'patient/dashboard',component:DashboardComponent ,pathMatch:"full"},
  {path:'Admin',component:AdminComponent ,pathMatch:"full"}

]
@NgModule({
  declarations: [

    AppComponent,

   
    
   

    MedicineListComponent,
    AdminComponent,
    
   
  
    PaymentPageComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,


    HttpClientModule,
    FormsModule,
    NgbModule,
   
    ReactiveFormsModule,
    

    InvoiceModule,
    PrescriptionModule,
    NgbPaginationModule, NgbAlertModule,

    DoctorModule,
  

    NgbPaginationModule, NgbAlertModule, FormsModule, HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CoreModule,

    InvoiceModule,
    NgbPaginationModule, NgbAlertModule,


    DoctorModule,
    HttpClientModule,
    ClientServiceModule


  ],
  providers: [



    NgbPaginationModule,
     NgbAlertModule,
     RegistrationModule,
     AppointmentModule,

     //RouterModule.forRoot(routes),
     RouterModule,

    //  RouterModule.forRoot(routes),

     DoctorModule,
    PatientDashBoardModule,
    ReactiveFormsModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
