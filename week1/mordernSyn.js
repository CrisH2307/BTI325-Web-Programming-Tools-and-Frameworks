//! Modern Syntax
/*
Functions and Arrow Functions:
In JS, functions are typically defined using either a declaration or expression and may 
contain either a fixed or variable list of parameters, which may or may not have default values.

Essentially, we have removed the "function" keyword and replaced it with an arrow following the 
parameter list. While this is indeed shorter, we can compress the function expression even further
as arrow functions use an "implicit return". This means that if the curly brackets ("{" and "}")
are omitted from the arrow function, the inner expression is returned:
        Ex: let adderArrowShort = (num1, num2) => num1 + num2;

Additionally, if there is a only a single parameter, the brackets surrounding the parameters may also be ommited
        let squared = num => num * num;

If there are 0 parameter to the function, empty round brackets must be used:
        let getHello = () => 'Hello World';

Destructing Object Parameters
It allows you to extract specific properties from an object and assign them to variable with the same names as obj's propertie

*/
let adder = function (num1, num2) {
  return num1 + num2;
};

// is the same as:

let adderArrow = (num1, num2) => {
  return num1 + num2;
};

//! Destructing Obj Parameters
let product = {
  id: "145be9",
  price: 1.35,
  onSale: false,
};

let price = product.price;
let id = product.id;
// or
//let { price, id } = product;

// Fucntion Call
function outputProduct(productObj) {
  console.log("Product", productObj.id, productObj.price);
}
//or
function outputProduct({ id, price }) {
  console.log("Product", id, price);
}
