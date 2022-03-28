import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import {HttpClientModule} from '@angular/common/http';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { FormsModule } from '@angular/forms';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AppComponent } from 'src/app/app.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';



const routes:Routes=[
{path:"",redirectTo:"/patient",pathMatch:"full"},
{path:'list',component:PatientListComponent},
{path:'add',component:AddPatientComponent,pathMatch:"full"},
{path:'details/:id',component:PatientDetailsComponent,pathMatch:"full"},
{path:'edit/:id',component:EditPatientComponent,pathMatch:"full"},

]
@NgModule({
  declarations: [
    PatientListComponent,
    EditPatientComponent,
    AddPatientComponent,
    PatientDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,RouterModule.forChild(routes)
  ],
  exports:[
    PatientListComponent,
    EditPatientComponent

  ],
  bootstrap: [AppComponent]
})
export class PatientModule { }
