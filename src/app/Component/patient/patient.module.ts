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



// const routes:Routes=[
// {path:"",redirectTo:"/patient",pathMatch:"full"},
// {path:'patient',component:PatientListComponent},
// {path:'patient/add',component:AddPatientComponent,pathMatch:"full"},
// {path:'patient/details/:id',component:PatientDetailsComponent,pathMatch:"full"},
// {path:'patient/edit/:id',component:EditPatientComponent,pathMatch:"full"},

// ]
@NgModule({
  declarations: [
    PatientListComponent,
    EditPatientComponent,
    AddPatientComponent,
    PatientDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,RouterModule.forRoot(routes),
    FormsModule
  ],
  exports:[
    PatientListComponent,
    EditPatientComponent

  ],
  bootstrap: [AppComponent]
})
export class PatientModule { }
