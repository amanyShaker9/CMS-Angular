import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './Component/core/core.module';


import { InvoiceModule } from './Component/invoice/invoice.module';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { PrescriptionListComponent } from './Component/prescription/prescription-list/prescription-list.component';





import { RegistrationModule } from './Component/registration/registration.module';
import { AppointmentModule } from './Component/appointment/appointment.module';
import { RouterModule, Routes } from '@angular/router';
import { DoctorModule} from './Component/doctor/doctor.module';
import { SignupComponent } from './Component/registration/signup/signup.component';
import { SigninComponent } from './Component/registration/signin/signin.component';
const routes:Routes=[
  // {path:'',redirectTo:'signUp',pathMatch:"full"},
  {path:'register',component:SignupComponent,pathMatch:"full"},
  {path:'login',component:SigninComponent,pathMatch:"full"},



]
@NgModule({
  declarations: [
    AppComponent,
    PrescriptionListComponent

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CoreModule,

    InvoiceModule,
    NgbPaginationModule, NgbAlertModule,


    DoctorModule,
    HttpClientModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
