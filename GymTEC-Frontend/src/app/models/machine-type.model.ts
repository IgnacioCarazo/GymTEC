export class MachineType {
    // machine type attributes
    public id!: number;
    public name!: string;
    public description!: string

    constructor (name : string) {
        this.name = name;
    }
}