export class Machine {
    // machine attributes
    public serialNumber!: number;
    public brand!: string;
    public cost!: number;
    // foreign attributes
    public typeID!: number;
    public gymName!: string;


    constructor (brand : string) {
        this.serialNumber = 100;
        this.brand = brand;
        this.gymName = "";
    }
}