/*
!   Object-Oriented JavaScript


Object Literal Notation:
let obj = {
  property_1: value_1,
  property_2: value_2,
  'property n': value_n,
}; // prope


Object Methods:
setName ("setter" to set a new value for the "name" property)
setAge ("setter" to set a new value for the "age" property)
getName ("getter" to get the current value of the "name" property)
getAge ("getter" to get the current value of the "age" property)



*/
let architect = {
  name: "Joe",
  age: 34,
  occupation: "Architect",

  setName: function (newName) {
    this.name = newName;
  },

  setAge: function (newAge) {
    this.age = newAge;
  },

  getName: function () {
    return this.name;
  },

  getAge: function () {
    return this.age;
  },
};

//! Class Default
class Developer {
  name;
  age;
  occupation = "asdsa"; // Default value

  constructor(setName = "", setAge = 0) {
    // Handle missing parameter with ' ' and 0
    this.name = setName;
    this.age = setAge;
  }

  setName(newName) {
    this.name = newName;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

// define new "architect objects using the "new" keyword with the "architect" class
let architect1 = new architect("Joe", 34);
let architect2 = new architect("Mary", 49);

// samples of accessing properties and methods on both objects

console.log(architect1.name); // "Joe"

console.log(architect1.getName()); // "Joe"
console.log(architect2.getName()); // "Mary"

//! Class with Private Methods
class Architect {
  #name;
  #age;
  #occupation = "architect"; // default value of "architect" for occupation

  constructor(setName = "", setAge = 0) {
    this.#name = setName;
    this.#age = setAge;
  }

  #privateMethod() {
    console.log("I'm a private method");
  }

  set name(newName) {
    this.#name = newName;
  }

  set age(newAge) {
    this.#age = newAge;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}

let architect3 = new Architect("Joe", 34);
console.log(architect3.name); // Joe
