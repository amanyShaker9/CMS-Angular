import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BillListComponent} from './bill-list/bill-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BillListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  exports:[
    BillListComponent
  ]
})
export class InvoiceModule { }
