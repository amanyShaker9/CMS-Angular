import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Payment } from '../Model/payment';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  reactiveForm !: FormGroup ; 

  constructor(private formBuilder: FormBuilder) { }

  pyment:Payment= new Payment(0,"",0, "")
  
  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      CardNumber : [],
      exp_date : [],
      cardCVC : [],
      CardHolder : [],
    })
  }
submit(r:any){
  console.log(this.pyment);
}
save(){
}
}

