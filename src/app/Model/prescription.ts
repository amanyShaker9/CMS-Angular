export class Prescription{
    constructor(public pre_id:number,public patient_id:{_id:number,firstName:string,lastName:string},public doctor_id:{_id:number,firstName:string,lastName:string},public Med_id:{_id:number,medicineName:string}){}
    
}