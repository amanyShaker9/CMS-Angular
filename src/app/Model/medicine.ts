export class Medicine {

    constructor(public Med_id: number=0,
        public medicineName?: string,
        public category?: string,
        public companyName?: string,
        public price?: number,
        public expiryDate?: any,
        public stock?: number,
        ) {
    }
    // get Id?() {
    //     return this?.Med_id;
    // }
    // set Id(id: number) {
    //      this.Med_id= id;
    // }

  
}
