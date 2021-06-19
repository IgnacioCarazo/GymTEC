export class Treatment {
    // treatment attributes
    public name!: string;
    public id!: number;

    public gymName!: string;


    constructor (name: string) {
        this.name = name;
    }
}