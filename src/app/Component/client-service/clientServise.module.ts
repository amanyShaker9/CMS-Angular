import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditClientServiceComponent } from './edit-client-service/edit-client-service.component';

import { AddClientServiceComponent } from './add-client-service/add-client-service.component';
import { ListClientServiceComponent } from './list-client-service/list-client-service.component';
import { HomeClientServiceComponent } from './home-client-service/home-client-service.component';
import { ClientServiceDatailsComponent } from './client-service-datails/client-service-datails.component';

const routes:Routes=[
  {path:"",component:ListClientServiceComponent },
  {path:"list",component:ListClientServiceComponent},

  {path:"edit/:id",component:EditClientServiceComponent},
  {path:"add",component:AddClientServiceComponent},
  {path:"details/:id",component:ClientServiceDatailsComponent},

]

@NgModule({
  declarations: [
    EditClientServiceComponent,


    AddClientServiceComponent,
    ListClientServiceComponent,
    HomeClientServiceComponent,
    ClientServiceDatailsComponent,
  ],

  imports: [

    CommonModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    HomeClientServiceComponent

  ]
})
export class ClientServiceModule { }
