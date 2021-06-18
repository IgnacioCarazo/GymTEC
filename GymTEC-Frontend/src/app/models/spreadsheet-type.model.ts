export class SpreadsheetType {
    // spreadsheet attributes
    public name!: string;
    public id!: number;
    public description!: string;
    public classWage!: number;
    public monthlyWage!: number;
    public hourlyWage!: number;

    constructor (name: string) {
        this.name = name;
    }
}