import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';

import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes:Routes=[

  {path:"",component:DoctorHomeComponent},
  {path:"list",component: DoctorListComponent,pathMatch:"full" },


  {path:"edit/:id",component:EditDoctorComponent,pathMatch:"full"},
  {path:"add",component:AddDoctorComponent},
  {path:"profile/:id",component:DoctorProfileComponent,pathMatch:"full"},
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


    CommonModule,FormsModule,RouterModule.forChild(routes)
  ],
  exports:[
    AddDoctorComponent,
    DoctorHomeComponent,

  ]
})
export class DoctorModule { }
