export class Product {
    // product attributes
    public barCode!: number;
    public name!: string;
    public cost!: number;
    public description!: string;

    public gymName!: string;


    constructor (name : string) {
        this.name = name;
        this.gymName = "";
    }
}