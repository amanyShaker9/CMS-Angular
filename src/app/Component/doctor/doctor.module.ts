import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';


import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DoctorDatailsComponent } from './doctor-datails/doctor-datails.component';
const routes:Routes=[
  // {path:"",component: DoctorListComponent },
  // {path:"list",component: DoctorListComponent },

  // {path:"edit/:id",component:EditDoctorComponent},
  // {path:"add",component:AddDoctorComponent},
  // {path:"profile/:id",component:DoctorProfileComponent},
  // {path:"details/:id",component:DoctorDatailsComponent},
]

@NgModule({
  declarations: [
    AddDoctorComponent,
    EditDoctorComponent,
    DoctorListComponent,
    DoctorProfileComponent,


    DoctorHomeComponent,
        DoctorDatailsComponent
  ],

  imports: [

    CommonModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    AddDoctorComponent,
    DoctorHomeComponent,

  ]
})
export class DoctorModule { }
