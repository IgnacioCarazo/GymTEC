export class Gym {
    // gym attributes
    public name!: string;
    public phoneNumbers!: string;
    public spaActive!: number;
    public storeActive!: number;
    public openingDate!: string;
    public businessHours!: string;
    public maxCapacity!: number;
    public storeProducts!: string[];
    public spaTreatments!: string[];
    //foreign attributes
    public adminID!: number;

    constructor (name: string) {
        this.name = name;
        this.storeProducts = ["P1","P2","P3"];
        this.spaTreatments = ["1","2","3"];
    }

}