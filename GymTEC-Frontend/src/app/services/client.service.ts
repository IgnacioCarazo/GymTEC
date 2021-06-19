import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Client } from "../models/client.model";

@Injectable()
export class ClientService {

  clientChanged = new Subject<Client>();

  client!: Client;
  login = false;

  constructor() {

  }
     /**
  * @name setClient()
  * @argument {Client} client
  * @description  It set this service devices with the value of the devices argument.
  */
      setClient(client: Client) {
        this.client = client;
        this.clientChanged.next(this.client);
      }
}