export class Product {
    // product attributes
    public barCode!: string;
    public name!: string;
    public cost!: number;
    public description!: string;

    constructor (name : string) {
        this.name = name;
    }
}