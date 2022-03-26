import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Model/doctor';
import { DectorService } from 'src/app/Services/dector.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  constructor(public doctoser: DectorService,public router:Router ) { }

  checkPass=false;
  newDoctor:Doctor=new Doctor(0,'','',0,0,'','','','',new Date(2020/11/11),{city:"",street:""},'','','');
  confirmsuccess(){
    Swal.fire({
      title: 'Doctor Added Successfully',
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
    this.router.navigate(['/doctor']);
  }
  add(con:string){
    console.log(con);
    console.log(this.newDoctor.password)
    if(con==this.newDoctor.password){
      this.doctoser.addDoctor(this.newDoctor).subscribe(

        {

          next:a=>{console.log(a),this.newDoctor=a}

        });

        this.checkPass=false;
        this.confirmsuccess();

    }else{
      this.checkPass=true;
    }

  }

}
