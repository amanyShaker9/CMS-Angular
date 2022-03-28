import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {Client_service} from 'src/app/Model/client-srvice';
import {ClientServiceService} from 'src/app/Services/client-service.service';
@Component({
  selector: 'app-add-client-service',
  templateUrl: './add-client-service.component.html',
  styleUrls: ['./add-client-service.component.scss']
})
export class AddClientServiceComponent implements OnInit {

  constructor(public cservices: ClientServiceService,public router:Router) { }

  newClient_service:Client_service=new Client_service(0,'',0,0,0,0,'');
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
  }
  back(){
    this.router.navigate(['/client-service']);
  }
  add(){

      this.cservices.addClient_service(this.newClient_service).subscribe(

        {

          next:a=>{console.log(a),this.newClient_service=a}

        });


        this.confirmsuccess();





  }

}
