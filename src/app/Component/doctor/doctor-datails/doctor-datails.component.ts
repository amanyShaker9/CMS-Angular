import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Doctor} from 'src/app/Model/doctor';
import { DectorService } from 'src/app/Services/dector.service';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-doctor-datails',
  templateUrl: './doctor-datails.component.html',
  styleUrls: ['./doctor-datails.component.scss']
})
export class DoctorDatailsComponent implements OnInit {
  newDoctor:Doctor=new Doctor(0,'','',0,0,'','','','',new Date(2020/11/11),{city:"",street:""},'','','');
  constructor(public doctoser: DectorService ,public router:Router) { }
  back(){
    this.router.navigate(['/doctor']);
  }
  ngOnInit(): void {
    this.newDoctor._id= this.doctoser.doctorId;

    this.doctoser.getDoctorById(this.newDoctor._id).subscribe(

      {

        next:a=>{this.newDoctor=a}


      });
  }

}
