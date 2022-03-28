import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:"",component: EmployeeListComponent  },
  {path:"list",component: EmployeeListComponent  },

  {path:"edit/:id",component:EditEmployeeComponent},
  {path:"add",component: AddEmployeeComponent},
  {path:"profile/:id",component:EmployeeProfileComponent},
  {path:"details/:id",component:EmployeeDetailsComponent},
]

@NgModule({
  declarations: [
    AddEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
    EmployeeHomeComponent,
    EmployeeProfileComponent
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    EmployeeHomeComponent

  ]

})
export class EmployeeModule { }
