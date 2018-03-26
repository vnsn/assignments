const nums = [12, 23, 34, 42, 56, 67];
console.log(Math.max(...nums));

const clowns = [...nums];

class Vehicle {
    constructor(make, model, numWheels) {
        this.make = make;
        this.model = model;
        this.numWheels = numWheels;
    }

    goFast() {
        console.log(`I'm a ${this.make} ${this.model} with ${this.numWheels} wheels`);
    }

    goSlow() {
        console.log("Putt putt");
    }
}

const car = new Vehicle("Honda", "Civic", 4);
car.goFast();

class Truck extends Vehicle {
    constructor(make, model, numWheels, wheelSize){
        super(make, model, numWheels);
        this.wheelSize = wheelSize;
    }
}

const truck = new Truck("Mack", "Pinnacle", 18, "22.5 inches");
truck.goFast();
truck.goSlow();

