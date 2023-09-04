//! STRING LITERALS
let x = 5,
  y = 6;
console.log(x + " + " + y + " = " + (x + y)); // 5 + 6 = 11

//! TEMPLATE STRINGS
/*
Use the (`) character to define the string and the "${expression}" syntax to insert an expression
into the string to be evaluated
*/
console.log(`${x} + ${y} = ${x + y}`); // 5 + 6 = 11

//* Example
/*
The map() method is a built-in function that is used to transform elements in an array. It takes a 
callback function as an argument and applies that function to each element in the array, creating
a new array with the results of those function calls. 
*/
let shapes = ["circle", "square", "triangle"];
console.log(`My favourite shapes are:${shapes.map((shape, index) => ` ${index + 1}: ${shape}`)}`);
// My favourite shapes are: 1: circle, 2: square, 3: triangle

const PI = 3.14159;

console.log("trying to change PI!");

try {
  PI = 99;
} catch (ex) {
  console.log("uh oh, an error occurred!");
}

console.log(`Alas, it cannot be done, PI remains: ${PI}`);
