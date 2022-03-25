
export class Doctor {
    constructor(
       public _id:number,public firstName:string, public  lastName:string, public phone:number,public age:number,
     public gender:string, public specilization:string, public Degree:String, public Department:string, public join_Date:Date,
      public address:{city:string,street:string},public  email:string,public  password:string,public  img:string

      ){}


}

