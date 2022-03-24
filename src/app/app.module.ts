import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './Component/core/core.module';
import { InvoiceModule } from './Component/invoice/invoice.module';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { PrescriptionListComponent } from './Component/prescription/prescription-list/prescription-list.component';



@NgModule({
  declarations: [
    AppComponent,
    PrescriptionListComponent
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CoreModule,
    InvoiceModule,
    NgbPaginationModule, NgbAlertModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
