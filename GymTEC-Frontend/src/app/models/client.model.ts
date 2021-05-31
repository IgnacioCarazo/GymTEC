export class Client {

    public name: string;
    public primaryLastName: string;
    public secondaryLastName: string;
    public email: string;
    public password: string;
    public dni!: number;
    public age!: number;
    public weight!: number;
    public imc!: number;
    public birthDate!: string;
    public address!: string;
  
      constructor(name: string, primaryLastName: string, secondaryLastName: string,
                  email: string, password: string, address: string) {
          this.name = name;
          this.primaryLastName = primaryLastName;
          this.secondaryLastName = secondaryLastName;
          this.email = email;
          this.password = password;
          this.address = address;
     }
    }