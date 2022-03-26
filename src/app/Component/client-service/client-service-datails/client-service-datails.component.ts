import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {Client_service} from 'src/app/Model/client-srvice';
import {ClientServiceService} from 'src/app/Services/client-service.service';
@Component({
  selector: 'app-client-service-datails',
  templateUrl: './client-service-datails.component.html',
  styleUrls: ['./client-service-datails.component.scss']
})
export class ClientServiceDatailsComponent implements OnInit {
  newClient_service:Client_service=new Client_service(0,'',0,0,0,0,'');

  constructor(public cservices: ClientServiceService,public router:Router) { }
  back(){
    this.router.navigate(['/client-service']);
  }
  ngOnInit(): void {
    this.newClient_service._id= this.cservices.Client_serviceId;
      this.cservices.getDoctorById(this.cservices.Client_serviceId).subscribe({
      next:a=>{this.newClient_service=a}
    });

  }



}
