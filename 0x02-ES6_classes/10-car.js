#!/usr/bin/node

export class Car {
  constructor(brand, motor, color) {
    this._branch = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new Car();
  }
}
