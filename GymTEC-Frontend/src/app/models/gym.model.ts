export class Gym {
    // gym attributes
    public name!: string;
    public phoneNumbers!: string;
    public spaActive!: number;
    public storeActive!: number;
    public openingDate!: string;
    public businessHours!: string;
    public maxCapacity!: number;
    //foreign attributes
    public adminID!: number;

    constructor (name: string) {
        this.name = name;
    }

}