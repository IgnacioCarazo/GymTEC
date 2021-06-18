export class Job {
    // job attributes
    public name!: string;
    public id!: number;
    public description!: string;

    constructor (name: string) {
        this.name = name;
    }
}