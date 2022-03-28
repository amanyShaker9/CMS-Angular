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
import { AppRoutingModule } from 'src/app/app-routing.module';


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
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    SidenavComponent
  ]


})
export class CoreModule { }
