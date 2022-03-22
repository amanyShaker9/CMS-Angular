import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';



@NgModule({
  declarations: [
    AddDoctorComponent,
    EditDoctorComponent,
    DoctorListComponent,
    DoctorProfileComponent,
    DeleteDoctorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DoctorModule { }
