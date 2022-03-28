import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from '../appointment/add-appointment/add-appointment.component';
import { ViewAppointmentComponent } from '../appointment/view-appointment/view-appointment.component';
import { EditAppointmentComponent } from '../appointment/edit-appointment/edit-appointment.component';
import { AdminComponent } from '../admin/admin.component';

const routes:Routes=[

  {path:'Admin',component:AdminComponent ,pathMatch:"full",children:[

    {path:'Admin/appointment/add',component:AddAppointmentComponent,},
    {path:'Admin/appointment/view',component:ViewAppointmentComponent ,},
    {path:'Admin/appointment/edit',component:EditAppointmentComponent,},
  ]}

  
]

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTreeModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    HeaderComponent,
    SidenavComponent
  ]


})
export class CoreModule { }
