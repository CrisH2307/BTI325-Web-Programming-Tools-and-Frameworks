// Inheritance Example with Getters / Setters & "Lexical This"

class Job {
  #name;
  #age;

  #occupation;

  constructor(setName = "", setAge = 0) {
    this.#name = setName;
    this.#age = setAge;
  }

  outputNameDelay() {
    setTimeout(() => console.log(this.#name), 1000);
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

class Architect extends Job {
  #occupation = "architect";

  constructor(setName = "", setAge = 0) {
    super(setName, setAge); // invoke the "parent" constructor
  }

  #privateMethod() {
    console.log("I'm a private method");
  }
}

let architect1 = new Architect("Joe", 34);

architect1.outputNameDelay();
console.log(architect1.name);

// ////////////////////////////////////////

// Arrow Functions

let adderArrowShort = (num1, num2) => num1 + num2;
console.log(adderArrowShort(1, 3));

let squared = (num) => num * num;
console.log(squared(3));

let getHello = () => "Hello World";
console.log(getHello());

// ////////////////////////////////////////

// Destructuring Object Parameters

let product = {
  id: "145be9",
  price: 1.35,
  onSale: false,
};

function outputProduct({ id, price }) {
  console.log("Product", id, price);
}

outputProduct(product);

// ////////////////////////////////////////

// Arrays (Iterating)

let sample = ["A", "B", "C"];

for (const element of sample) {
  console.log(element);
}

sample.forEach((element, index) => console.log(element + " at index: " + index));

// ////////////////////////////////////////

// Arrays (Destructuring)

let [a, b] = sample;

console.log(a, b);

// ////////////////////////////////////////

// Arrays (Spread Syntax)

let sample1 = ["A", "B", "C"];
let sample2 = ["D", "E", "F"];

let sample3 = [...sample1, ...sample2];

console.log(sample3);

// ////////////////////////////////////////

// Strings (Template Literals)

let x = 5,
  y = 6;
console.log(`${x} + ${y} = ${x + y}`); // 5 + 6 = 11

let shapes = ["circle", "square", "triangle"];
console.log(`My favourite shapes are:${shapes.map((shape, index) => ` ${index + 1}: ${shape}`)}`);

// ////////////////////////////////////////

// Errors (Try / Catch & Throw

function divide(x, y) {
  if (y == 0) {
    throw new Error("Division by Zero!");
  }
  return x / y;
}

let d = 3,
  e = 0,
  f;

try {
  f = divide(d, e);
} catch (ex) {
  console.log(`uh oh, an error occurred: ${ex.message}`);
  f = NaN;
}

console.log(`${d} / ${e} = ${f}`);

// ////////////////////////////////////////
