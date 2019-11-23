'use strict';

class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`,
    );
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  //Price methods
  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  //engine start methods
  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  //Changed speed methods
  accelerate(value) {
    const newSpeed = this.speed + value;
    if (newSpeed <= this.maxSpeed) {
      this.speed = newSpeed;
    }
  }

  decelerate(value) {
    const newSpeed = this.speed - value;
    if (newSpeed >= 0) {
      this.speed = newSpeed;
    }
  }

  //drived distance
  drive(hours) {
    if (this.isOn) {
      const drivedDistance = hours * this.speed;
      this.distance += drivedDistance;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
