import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
  
    AddAppointmentComponent,
       ViewAppointmentComponent,
       EditAppointmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  exports:[
    AddAppointmentComponent,
    ViewAppointmentComponent,
    EditAppointmentComponent
  ]
})
export class AppointmentModule { }
