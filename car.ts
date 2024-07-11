// car.ts
import { Vehicle } from "./vehicle";

// Implement the Car class that implements the Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Camry", 2022);

// Call the start method on the instance
myCar.start();
