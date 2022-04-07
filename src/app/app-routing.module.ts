import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Component/admin/admin.component';
import { AddAppointmentComponent } from './Component/appointment/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './Component/appointment/edit-appointment/edit-appointment.component';
import { ViewAppointmentComponent } from './Component/appointment/view-appointment/view-appointment.component';
import { AddDoctorComponent } from './Component/doctor/add-doctor/add-doctor.component';
import { DoctorDatailsComponent } from './Component/doctor/doctor-datails/doctor-datails.component';

import { DoctorHomeComponent } from './Component/doctor/doctor-home/doctor-home.component';
import { DoctorListComponent } from './Component/doctor/doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './Component/doctor/doctor-profile/doctor-profile.component';
import { EditDoctorComponent } from './Component/doctor/edit-doctor/edit-doctor.component';
import { MedicineListComponent } from './Component/medicine/medicine';
import { DashboardComponent } from './Component/patient-dash-board/dashboard/dashboard.component';
import { AddPatientComponent } from './Component/patient/add-patient/add-patient.component';
import { EditPatientComponent } from './Component/patient/edit-patient/edit-patient.component';
import { PatientDetailsComponent } from './Component/patient/patient-details/patient-details.component';
import { PatientListComponent } from './Component/patient/patient-list/patient-list.component';
import { AddPrescriptionComponent } from './Component/prescription/add-prescription/add-prescription.component';
import { DetailsPrescriptionComponent } from './Component/prescription/details-prescription/details-prescription.component';
import { EditPrescriptionComponent } from './Component/prescription/edit-prescription/edit-prescription.component';
import { PrescriptionListComponent } from './Component/prescription/prescription-list/prescription-list.component';
import { SigninComponent } from './Component/registration/signin/signin.component';
import { SignupComponent } from './Component/registration/signup/signup.component';
const routes: Routes = [
  // registration Routing
  {path:'',redirectTo:'register',pathMatch:"full"},
  {path:'register',component:SignupComponent,pathMatch:"full"},
  {path:'login',component:SigninComponent,pathMatch:"full"},
  {path:'patient/dashboard',component:DashboardComponent ,pathMatch:"full"},
  {path:'Admin',component:AdminComponent ,pathMatch:"full"},

  //appointment Router
  {path:'appointment/add',component:AddAppointmentComponent,pathMatch:"full"},
  {path:'appointment/view',component:ViewAppointmentComponent ,pathMatch:"full"},
  {path:'appointment/edit',component:EditAppointmentComponent,pathMatch:"full"},


  //doctor Router
  {path:"doctor/list",component: DoctorListComponent },

  {path:"doctor/edit/:id",component:EditDoctorComponent},
  {path:"doctor/add",component:AddDoctorComponent},
  {path:"doctor/profile/:id",component:DoctorProfileComponent},
  {path:"doctor/details/:id",component:DoctorDatailsComponent},

  //patient Routing
{path:'patient/list',component:PatientListComponent},
{path:'patient/add',component:AddPatientComponent,pathMatch:"full"},
{path:'patient/details/:id',component:PatientDetailsComponent,pathMatch:"full"},
{path:'patient/edit/:id',component:EditPatientComponent,pathMatch:"full"},

  //medicinien Routing
  {path:'medicin/list',component:MedicineListComponent},

   //prescription Routing
  {path:'Prescription',component: PrescriptionListComponent},
  {path:'Prescription/add',component:AddPrescriptionComponent,pathMatch:"full"},
  {path:'Prescription/:id',component: EditPrescriptionComponent,pathMatch:"full"},
  {path:'Prescription/details/:id',component:DetailsPrescriptionComponent,pathMatch:"full"},

  //Routin invice
  

  {path:"patient",loadChildren:()=>import("./Component/patient/patient.module").then(m=>m.PatientModule)},
  {path:"doctor",loadChildren:()=>import("./Component/doctor/doctor.module").then(m=>m.DoctorModule)},
  {path:"client-service",loadChildren:()=>import("./Component/client-service/clientServise.module").then(m=>m.ClientServiceModule)}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
