export class Employee {
    // employee attributes
    public id!: number;
    public name!: string;
    public primaryLastName!: string;
    public secondaryLastName!: string;
    public province!: string;
    public canton!: string;
    public district!: string;
    public email!: string;
    public password!: string;
    public numberOfClasses!: number;
    public laboredHours!: number;
    public salary!: number;
    public role!: string;

    // foreign attributes
    public gymName!: string;

    constructor (name: string) {
        this.name = name;
        this.id = 45;
        this.primaryLastName = "Carazo";
        this.secondaryLastName = "Nieto";
        this.role = "Administrador";
        
    }
}