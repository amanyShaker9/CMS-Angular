
export class Bill{
constructor(public _id ?:Object,public bill_id?:number,public admission_id?:number,public patient_id?:{_id:number,firstName:string,lastName:string},public doctor_id?:{ _id:number,firstName:string,lastName:string},public admit_date?:Date,public totalPrice?:number,public paymentMethod?:string,public paymentStatus?:string){}
public toString(): string {
    return this.doctor_id?.firstName + ' ' ;
}
}
 
