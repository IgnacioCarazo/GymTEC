export class Service {
    public name!: string;
    public id!: number;
    public description!: string;


    constructor (name : string) {
        this.name = name;
    }
}