"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
const myCar = new Car("Toyota", "Corolla", 2022);
myCar.start(); // Should log: "Car engine started"
// Output: Car engine started
