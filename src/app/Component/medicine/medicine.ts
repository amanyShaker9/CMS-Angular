import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/Model/medicine';
import { MedicineService } from 'src/app/Services/medicine.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine.html',
  styleUrls: ['./medicine.scss'],
})
export class MedicineListComponent implements OnInit {

  formValue !: FormGroup;

  medicineobj: Medicine = new Medicine();

  medicine: Medicine[] = []
  constructor(private mdnSer: MedicineService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      Med_id: "",
      medicineName: "",
      companyName: "",
      category: "",
      price: "",
      expiryDate: "",
      stock: ""
    });
    this.getMedicine();

  }

  getMedicine() {
    this.mdnSer.getAllMedicine().subscribe({
      next: a => { this.medicine = a }
    })
  }

  postMedicine() {
    this.medicineobj.Med_id = this.formValue.value.Med_id;
    this.medicineobj.medicineName = this.formValue.value.medicineName;
    this.medicineobj.companyName = this.formValue.value.companyName;
    this.medicineobj.category = this.formValue.value.category;
    this.medicineobj.price = this.formValue.value.price;
    this.medicineobj.expiryDate = this.formValue.value.expiryDate;
    this.medicineobj.stock = this.formValue.value.stock;

    this.mdnSer.add(this.medicineobj).subscribe(res => {
      console.log(res);
      alert("Medicine Added Successfuly")
      this.getMedicine();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
    }, error => {
      alert("something went wrong")
      console.log(this.medicineobj)
    })
  }

  Update(row: any) {
    this.medicineobj.Med_id = row.Med_id;
    this.formValue.controls['Med_id'].setValue(row.Med_id);
    this.formValue.controls['medicineName'].setValue(row.medicineName);
    this.formValue.controls['companyName'].setValue(row.companyName);
    this.formValue.controls['category'].setValue(row.category);
    this.formValue.controls['price'].setValue(row.price);
    this.formValue.controls['expiryDate'].setValue(row.expiryDate);
    this.formValue.controls['stock'].setValue(row.stock);
  }

  updateMedicine() {
    this.medicineobj.Med_id = this.formValue.value.Med_id;
    this.medicineobj.medicineName = this.formValue.value.medicineName;
    this.medicineobj.companyName = this.formValue.value.companyName;
    this.medicineobj.category = this.formValue.value.category;
    this.medicineobj.price = this.formValue.value.price;
    this.medicineobj.expiryDate = this.formValue.value.expiryDate;
    this.medicineobj.stock = this.formValue.value.stock;


    this.mdnSer.updateMedicine(this.medicineobj, this.medicineobj.Med_id).subscribe(res => {
      // console.log(res);
      alert("Medicine Updated Successfuly")
      this.getMedicine();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
    }, error => {
      alert("something went wrong")
      // console.log(this.medicineobj)
    })


  }

  Delete(row: any) {
    this.mdnSer.deleteMedicine(row.Med_id).subscribe(res => {
      alert("Medicine Deleted");
      this.getMedicine();
    })
  }
}
