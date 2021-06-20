export class SpreadsheetType {
    // spreadsheet attributes
    public name!: string;
    public id!: number;
    public description!: string;
    

    constructor (name: string) {
        this.name = name;
    }
}