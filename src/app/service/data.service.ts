import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root"
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    /**
    |--------------------------------------------------
    | API Array in JSON format
    |--------------------------------------------------
    */

    let products = [
      {
        id: 1,
        title: "STARTER",
        amount: 1,
        status: "unsold",
        visible: true,        
        description: "Starter features for your business to grow."
      },
      {
        id: 2,
        title: "REGULAR",
        amount: 25,
        status: "unsold",
        visible: true,        
        description: "Regular features for your business to grow."
      },
      {
        id: 3,
        title: "PROFESSIONAL",
        amount: 75,
        status: "unsold",
        visible: true,     
        abcd: 1,   
        description: "Professional features for your business to grow."
      },
      {
        id: 4,
        title: "ULTIMATE",
        amount: 115,
        status: "unsold",
        visible: true,        
        description: "The ultimate set of features for your business to grow."
      }
    ];

    return { products };
  }
}
