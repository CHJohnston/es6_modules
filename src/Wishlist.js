export default class Wishlist {
  nextId = 1;
  constructor() {
    this.cars = [];
  }
  add(car) {
    car.id = this.nextId++;
    this.cars.push(car);
  }
  remove(car) {
    this.cars = this.cars.filter((existingCar) => existingCar != car);
  }
}
