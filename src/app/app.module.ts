import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './Component/core/core.module';
import { MedicineListComponent } from './Component/medicine/medicine';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicineService } from './Services/medicine.service';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceModule } from './Component/invoice/invoice.module';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PrescriptionListComponent } from './Component/prescription/prescription-list/prescription-list.component';

import { RegistrationModule } from './Component/registration/registration.module';
import { AppointmentModule } from './Component/appointment/appointment.module';
import { RouterModule, Routes } from '@angular/router';
import { DoctorModule} from './Component/doctor/doctor.module';
import{ClientServiceModule}from './Component/client-service/clientServise.module'
import { SignupComponent } from './Component/registration/signup/signup.component';
import { SigninComponent } from './Component/registration/signin/signin.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';


const routes:Routes=[
  // {path:'',redirectTo:'signUp',pathMatch:"full"},
  {path:'register',component:SignupComponent,pathMatch:"full"},
  {path:'login',component:SigninComponent,pathMatch:"full"},



]
@NgModule({
  declarations: [
    AppComponent,
    MedicineListComponent,
    PrescriptionListComponent,
    PaymentPageComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
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

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
