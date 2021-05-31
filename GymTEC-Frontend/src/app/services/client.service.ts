import { Injectable } from "@angular/core";
import { Client } from "../models/client.model";

@Injectable()
export class ClientService {
  client!: Client;
  login = false;

  constructor() {

  }
}