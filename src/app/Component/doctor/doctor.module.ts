import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';

import { DoctorHomeComponent } from './doctor-home/doctor-home.component';


@NgModule({
  declarations: [
    AddDoctorComponent,
    EditDoctorComponent,
    DoctorListComponent,
    DoctorProfileComponent,
    DeleteDoctorComponent,
    
    DoctorHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddDoctorComponent,
    DoctorHomeComponent,

  ]
})
export class DoctorModule { }
