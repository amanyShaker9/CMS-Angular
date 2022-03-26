import { Component, OnInit } from '@angular/core';
import {Bill} from '../../../Model/bill';
import {Doctor} from '../../../Model/doctor';
import {InvoiceService} from '../../../Services/invoice.service';
import { DectorService} from '../../../Services/dector.service';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {
  formValue !:FormGroup;
  showAdd !:boolean;
  showUpdate !:boolean;
  billobj: Bill=new Bill();
  constructor(public invServ:InvoiceService,private formBuilder:FormBuilder,public docserve: DectorService) { }
   billArray:Bill[]=[];
   doctorArray:Doctor[]=[];
   doctorId:number=0;
  ngOnInit(): void {

    this.formValue=this.formBuilder.group({
      billID:"",
      patientName:"",
      admissionID:"",
      doctorName:"",
      date:"",
      price:"",
      payMethod:"",
      payState:""
    });
    this.allDoctor();
    this.allBill();
   }
   allDoctor(){
 //subscribe on observable
 this.docserve.getDoctors().subscribe({
  next:a=>{this.doctorArray=a}

 });
 console .log( this.billArray);

   }
   allBill(){
     //subscribe on observable
    this.invServ.getBills().subscribe({
      next:a=>{this.billArray=a}

     });
     console .log( this.billArray);
   }
postData(){
  this.billobj.bill_id=this.formValue.value.billID;
  this.billobj.patient_id=this.formValue.value.patientName;
  this.billobj.doctor_id=this.formValue.value.doctorName;
  this.billobj.admission_id=this.formValue.value.admissionID;
  this.billobj.totalPrice=this.formValue.value.price;
  this.billobj.paymentMethod=this.formValue.value.payMethod;
  this.billobj.paymentStatus=this.formValue.value.payState;
  this.billobj.admit_date=this.formValue.value.date;
  this.invServ.addBill(this.billobj).subscribe(res=>{
    console.log(res);
    alert("prescription added");
    let ref=document.getElementById("cancle");
    ref?.click();
    this.formValue.reset();
    this.allBill();
  },
  err=>{
    console.log(this.billobj);
    alert("wrong");
  }
  );

}


editItem(row:any){
this.formValue.controls["billID"].setValue(row.bill_id);
this.formValue.controls["patientName"].setValue(row.patient_id);
this.formValue.controls["doctorName"].setValue(row.doctor_id);
this.formValue.controls["admissionID"].setValue(row.admission_id);
this.formValue.controls["price"].setValue(row.totalPrice);
this.formValue.controls["payMethod"].setValue(row.paymentMethod);
this.formValue.controls["payState"].setValue(row.paymentStatus);
this.formValue.controls["date"].setValue(row.admit_date);
this.showAdd=false;
  this.showUpdate=true;
}

updateData(){

  this.billobj.bill_id=this.formValue.value.billID;
  this.billobj.patient_id=this.formValue.value.patientName;
  this.billobj.doctor_id=this.formValue.value.doctorName;
  this.billobj.admission_id=this.formValue.value.admissionID;
  this.billobj.totalPrice=this.formValue.value.price;
  this.billobj.paymentMethod=this.formValue.value.payMethod;
  this.billobj.paymentStatus=this.formValue.value.payState;
  this.billobj.admit_date=this.formValue.value.date;
this.invServ.editBill(this.billobj).subscribe(res=>{
  alert("sucsses");
});
let ref=document.getElementById("cancle");
ref?.click();
this.formValue.reset();
this.allBill();
}




   removeItem(row:any){
    this.invServ.deleteBill( row.bill_id).subscribe(res=>{
      alert("Deleted it");
      this.allBill();
    })
   }


clickAddPrescription(){
  this.formValue.reset();
  this.showAdd=true;
  this.showUpdate=false;
}
doctorid(item:any){
  debugger;
 this. doctorId=item.id;
 console.log(this. doctorId);
}

  }

