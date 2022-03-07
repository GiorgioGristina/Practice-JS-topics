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
class PersonCL {
  constructor(name, birthYear){
    this.name = name;
    this.birthYear = birthYear
  }

  calcAge(){
    console.log(2037 - this.birthYear);
  }

}

// const gio = new PersonCL('Giorgina', 1950)
// console.log(gio);
// gio.calcAge();

// console.log(gio.__proto__ === PersonCL.prototype);

// const  account = {
//   owner: "jonas",
//   movements: [3, 545, 65, 54, 76 ],

//   get latest(){
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov){
//      this.movements.push(mov);
//   }
// }

// console.log(account.latest);

// account.latest = 40
// console.log(account.movements);

// Person.hey = function (){
//   console.log('hey there');
//   console.log(this);
// }

// Person.hey()

// const PersonProto = {

//   calcAge(){
//     console.log(2037 - this.birthYear);
//   },
//   init(name, birthYear){
//     this.name = name;
//     this.birthYear = birthYear;

//   },
// }

// const steven = Object.create(PersonProto)
// steven.init("steve", 1900)
// console.log(steven);

// steven.calcAge()

// class Car {
//   constructor(make, speed){
//     this.make = make;
//     this.speed = speed;
//   }

  

//   accelerate(){
//     console.log(`the car is going at ${this.speed += 10} km/h`);
//   }

//   brake(){
//     console.log(`the car is going at ${this.speed -= 5} km/h`);
//   }

//   get speedUS (){
//     return this.speed / 1.6 
//   }

//   set speedUS(speed){
//     this.speed *= 1.6
//   }


// }

// const ford = new Car("mustang", 120)

// console.log(ford.speedUS);
// ford.accelerate()
// ford.accelerate()
// ford.accelerate()
// ford.brake()
// ford.speedUS = 50
// console.log(ford.speedUS);



// const Person = function(firstName, birthYear){
//   // instance property
//   this.firstName = firstName;
//   this.birthYear = birthYear;

// } 

// // // prototypes

// Person.prototype.calcAge = function(){
//   console.log(2037 - this.birthYear);
// }

// const Student = function(firstName, birthYear, course){
//   Person.call(this, firstName, birthYear)
//   this.course = course;

// }

// // linking prototype
// Student.prototype = Object.create(Person.prototype)


// Student.prototype.introduce = function(){
//   console.log(`my name is ${this.firstName} and I study ${this.course}`);
// }
// const mike = new Student('mike', 2002, 'CS');

// console.log(mike);
// mike.introduce()
// mike.calcAge()

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike.__proto__.__proto__.__proto__);

// Student.prototype.constructor = Student

// console.dir(Student.prototype.constructor);
// console.log(mike instanceof Person);

// CHALLENGE 3
// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed;
//   } 
  
//   Car.prototype.accelerate = function() {
//     console.log(`the car is going at ${this.speed += 10} km/h`);
//   }
  
//   Car.prototype.brake = function() {
//     console.log(`the car is going at ${this.speed -= 5} km/h`);
//   }
  

// const Ev = function(make, speed, charge){
//   Car.call(this, make, speed)
//   this.charge = charge
// }

// Ev.prototype = Object.create(Car.prototype)

// Ev.prototype.chargeBattery = function(chargeTo){
//   this.charge = chargeTo;
// }

// const tesla = new Ev('tesla', 120, 23)


// Ev.prototype.accelerate = function(){
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`the car is going at ${this.speed} km/h with a charge of ${this.charge}`);

//   }

// tesla.chargeBattery(20)
// console.log(tesla);
// tesla.accelerate()
// tesla.brake()



// Ev.prototype.accelerate = function(){
//   this.speed += 20;
//   this.charge -= 1
// }


// tesla.chargeBattery(20)
// tesla.accelerate()


//  const PersonProto = {

//     calcAge(){
//       console.log(2037 - this.birthYear);
//     },
//     init(name, birthYear){
//       this.name = name;
//       this.birthYear = birthYear;
  
//     },
//   }

//   const steven = Object.create(PersonProto)

//   const StudentProto = Object.create(PersonProto)

//   StudentProto.init = function(firstName, birthYear, course){
//       PersonProto.init.call(this, firstName, birthYear)
//       this.course = course;
//   }

//   StudentProto.introduce = function(){
//       console.log(`my name is ${this.firstName} and I study ${this.course}`);
//     }
//   const jay = Object.create(StudentProto)

//   jay.init('jay', 2010, 'cs')
//   jay.introduce();
//   jay.calcAge();

// public fields(property)
// private fields(property)
// public methods
// private methods

// class Account {
//   // public fields
//   locale = navigator.language;
//   // private fields
//   #movements = [];
//   #pin;


//   constructor(owner, currency, pin){
//     this.owner = owner;
//     this.currency= currency; 
//     // protected property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   // publick interface

//   getMovements(){
//     return this.#movements;
//   }
//   deposit(value){
//     this.#movements.push(value);
//     return this
//   }

//   withdraw(value){
//     this.deposit(-value); 
//     return this

//   }

//   _approval(value){
//     return true 
//   }

//   requestLoan(value){
//     if (this._approval(value)) {
//      this.deposit(value)
//      console.log('loan approved');
//     }   
//     return this

//   }
// }

// const acc1 = new Account('jonas', 'EUR', 1111 );

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000)
// console.log(acc1);


// // the methods need to return the object for allowing method chaining
// acc1.deposit(222).deposit(33).withdraw(22).requestLoan(54535).withdraw(4000)
// console.log(acc1.getMovements());

// ======================================
class Car{
  constructor(make, speed) {
    
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10
    console.log(`the car is going at ${this.speed} km/h`);
    return this
  }

  brake() {
    this.speed -= 5
    console.log(`the car is going at ${this.speed} km/h`);
    return this
  }
} 
    
   
  
  class Ev extends Car{
    #charge;
    constructor(make, speed, charge) {
      super(make, speed)
      this.#charge = charge;
    }

    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this
      }

  }

  const rivian = new Ev('rivian', 120, 23)
console.log(rivian);
  rivian.accelerate().brake().chargeBattery(90)
console.log(rivian);
