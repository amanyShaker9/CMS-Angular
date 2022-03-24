import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';

import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {path:"",component: DoctorListComponent },
  {path:"edit",component:EditDoctorComponent},
  {path:"add",component:AddDoctorComponent},
  {path:"profile/:id",component:DoctorProfileComponent},
]

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
  
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[

    DoctorHomeComponent,

  ]
})
export class DoctorModule { }
