'use strict';

// const Person = function(firstName, birthYear){
//   // instance property
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // never put method in the constructor
//   // this.calcAge = function(){
//   //   console.log(2037 - birthYear);
//   // }
// } 

// const giorgio = new Person('Giorgio', 1991);
// console.log(giorgio instanceof Person);
// // 1 new {} is created

// // 2 function is called, this ={}

// // 3 {} linked to prototype
// // 4 function return {}
// const simo = new Person('Simone', 1990);

// // prototypes
// console.log(simo);
// Person.prototype.calcAge = function(){
//   console.log(2037 - birthYear);
// }

// giorgio.calcAge
// // when add property with method 
// Person.prototype.species = 'human';

// console.log(Person.prototype.constructor);

// console.log(giorgio.hasOwnProperty('species'));
// console.log(giorgio.hasOwnProperty('firstName'));

// console.log(giorgio.__proto__);

// console.log(giorgio.__proto__.__proto__.__proto__);
// // create new method for array using prototype method

// Array.prototype.unique = function(){
//   return [...new Set(this)]
// }

// // CHALLENGE 1
// // 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// // 'speed' propserty. The 'speed' property is the current speed of the car in
// // km/h

// const Car = function(make, speed){
//   this.make = make;
//   this.speed = speed;
// }

// // 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// // and log the new speed to the console



// Car.prototype.accelerate = function() {
//   console.log(`the car is going at ${this.speed += 10} km/h`);
// }
// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// // the new speed to the console
// Car.prototype.brake = function() {
//   console.log(`the car is going at ${this.speed -= 5} km/h`);
// }

// // 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// // 'brake' multiple times on each of them
// // § Data car 1: 'BMW' going at 120 km/h
// // § Data car 2: 'Mercedes' going at 95 km/h
// const blueCar = new Car('BMW', 120);
// const redCar = new Car('Mercedes', 95);

// blueCar.accelerate();
// blueCar.accelerate();
// redCar.brake();



// // CLASSES
// // class espression
// // conts PersonCl = class{}


// // class declares
// class PersonCL {
//   constructor(name, birthYear){
//     this.name = name;
//     this.birthYear = birthYear
//   }

//   calcAge(){
//     console.log(2037 - this.birthYear);
//   }

// }

// const gio = new PersonCL('Giorgina', 1950)
// console.log(gio);
// gio.calcAge();

// console.log(gio.__proto__ === PersonCL.prototype);

const  account = {
  owner: "jonas",
  movements: [3, 545, 65, 54, 76 ],

  get latest(){
    return this.movements.slice(-1).pop();
  },

  set latest(mov){
     this.movements.push(mov);
  }
}

console.log(account.latest);

account.latest = 40
console.log(account.movements);
