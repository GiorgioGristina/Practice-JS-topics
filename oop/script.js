'use strict';

const Person = function(firstName, birthYear){
  // instance property
  this.firstName = firstName;
  this.birthYear = birthYear;
  // never put method in the constructor
  this.calcAge = function(){
    console.log(2037 - birthYear);
  }
} 

const giorgio = new Person('Giorgio', 1991);
console.log(giorgio instanceof Person);
// 1 new {} is created

// 2 function is called, this ={}

// 3 {} linked to prototype
// 4 function return {}
const simo = new Person('Simone', 1990);

// prototypes
console.log(simo);
Person.prototype.calcAge = function(){
  console.log(2037 - birthYear);
}

giorgio.calcAge
// when add property with method 
Person.prototype.species = 'human';

console.log(giorgio.species, simo.species);

console.log(giorgio.hasOwnProperty('species'));
console.log(giorgio.hasOwnProperty('firstName'));
