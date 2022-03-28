export class Prescription{
    constructor(public pre_id?:number,public patient_id?:{firstName:string,lastName:string},public doctor_id?:{firstName:string,lastName:string}){}
}