//! FOR LOOP

//* For..of loop
/*
This Loop executes a loop that operates on a sequence of values sourced from an iterable object.
Iterate objs include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList 
(and DOM collection)
*/
let sample = ["A", "B", "C"];

for (const element of sample) {
  console.log(element);
}

//* forEach()
/*
It can be used to execute a function once per element of the array, with the element
(and optionally, the index) as the parameters
*/
let sample1 = ["A", "B", "C"];
sample1.forEach((element, index) => console.log(element + " at index: " + index));

//! DESTRUCTING ELEMENTS
/*
We used the feature to make the syntax for extracting properties from objs more concise and to clarify func params
*/
// let sample3 = ["A", "B", "C"];

// // let a = sample[0];
// // let b = sample[1];

// let [a, b] = sample4;

//! SPREAD SYNTAX USING REST PARAMETERS
/*
 A common use for it is the form of rest parameters, which allow the creation of functions that 
 take on an unknown number of parameters
*/
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6)); // 21

//! SPREAD SYNTAX USING CONCAT
let sample5 = ["A", "B", "C"];
let sample6 = ["D", "E", "F"];

let sample7 = [...sample5, ...sample6];

console.log(sample7); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

let product = {
  id: "145be9",
  price: 1.35,
  onSale: false,
};

let productWithStore = { ...product, store: "53" }; //* Represent on object literal in JS
/*
Define a new obj called productWithStore. It uses a spread syntax to create a shallow copy
of the product obj and then add a new property to it. The resulting object has all the 
properties of product and an additional property called store with the value 53
*/
console.log(productWithStore); // { id: '145be9', price: 1.35, onSale: false, store: '53' }
