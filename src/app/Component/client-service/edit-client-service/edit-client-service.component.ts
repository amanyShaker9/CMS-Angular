import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {Client_service} from 'src/app/Model/client-srvice';
import {ClientServiceService} from 'src/app/Services/client-service.service';
@Component({
  selector: 'app-edit-client-service',
  templateUrl: './edit-client-service.component.html',
  styleUrls: ['./edit-client-service.component.scss']
})
export class EditClientServiceComponent implements OnInit {
  newClient_service:Client_service=new Client_service(0,'',0,0,0,0,'');
  constructor(public cservices: ClientServiceService,public router:Router) { }

  confirmsuccess(){
    Swal.fire({
      title: 'Client_service Added Successfully',
      text: 'go to list to see changes!',
      icon: 'success',
      //showCancelButton: true,
      confirmButtonText: 'OK!',
    })
  }
  confirmerror(){
    Swal.fire({
      title: 'error occure during adding  data',
      text: 'check data that you enter!',
      icon: 'error',
      //showCancelButton: true,
      confirmButtonText: 'OK!',
    })
  }
  ngOnInit(): void {
    this.newClient_service._id= this.cservices.Client_serviceId;

    this.cservices.getDoctorById(this.newClient_service._id).subscribe(

      {

        next:a=>{this.newClient_service=a}


      });
  }
  back(){
    this.router.navigate(['/client-service']);
  }
  add(){

      this.cservices.updateClient_service(this.newClient_service,this.cservices.Client_serviceId).subscribe(

        {

          next:a=>{console.log(a),this.newClient_service=a}

        });


        this.confirmsuccess();





  }
}
