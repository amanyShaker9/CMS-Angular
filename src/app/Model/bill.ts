export class Bill{
constructor(public _id ?:Object,public bill_id?:number,public admission_id?:number,public patient_id?:number,public doctor_id?:number,public admit_date?:Date,public totalPrice?:number,public paymentMethod?:string,public paymentStatus?:string){}
}
