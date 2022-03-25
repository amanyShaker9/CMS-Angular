export class Patient {
    constructor(public _id:number,public firstName:string,public lastName:string,
        public gender:string,public phone:string,public address:{street:number,city:string,country:string},
        
        ){}

}
