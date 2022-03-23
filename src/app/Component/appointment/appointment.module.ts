import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAppointmentComponent } from './add-Appointment/add-appointment.component';



@NgModule({
  declarations: [
    AddAppointmentComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AddAppointmentComponent ,
  ]
})
export class AppointmentModule { }
