import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditPrescriptionComponent } from './edit-prescription/edit-prescription.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { DetailsPrescriptionComponent } from './details-prescription/details-prescription.component';

const routes:Routes=[
  // {path:"",redirectTo:"/Prescription",pathMatch:"full"},
  // {path:'Prescription',component: PrescriptionListComponent},
  // {path:'Prescription/add',component:AddPrescriptionComponent,pathMatch:"full"},
  // {path:'Prescription/:id',component: EditPrescriptionComponent,pathMatch:"full"},
  // {path:'Prescription/details/:id',component:DetailsPrescriptionComponent,pathMatch:"full"},
  ]


@NgModule({
  declarations: [
    EditPrescriptionComponent,
    AddPrescriptionComponent,
    PrescriptionListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule
  ],
  exports:[
    EditPrescriptionComponent,
    PrescriptionListComponent
  ],
  bootstrap: [AppComponent]
})



export class PrescriptionModule { }
