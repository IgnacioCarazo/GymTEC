export class Service {
    public name!: string;
    public id!: number;
    public description!: string;

    public gymName!: string;



    constructor (name : string) {
        this.name = name;
    }
}