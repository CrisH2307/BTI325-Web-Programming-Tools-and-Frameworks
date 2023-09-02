//! Inheritance and the Prototype Chain
/*
JavaScript is a bit confusing for developers experienced in class-based languages 
(like Java or C++), as it is dynamic and does not have static types.

When it comes to inheritance, JS only has one construct: obj. Each obj has a private property
which holds a link to another object called its prototypes. That prototype object has a prototype
of its own, and so on until an obj is reached with null as its prototype.

Inheriting Methods:
JavaScript does not have "methods" in the form that class-based languages define them. 
In JavaScript, any function can be added to an object in the form of a property. 
An inherited function acts just as any other property, including property shadowing as 
shown above (in this case, a form of method overriding).
*/

const o = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here as another object literal.
  __proto__: {
    b: 3,
    c: 4,
  },
};

// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype (we will explain what that means later).
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null, by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and there is no 'd' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching, no property found, return undefined.

const o1 = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here
  // as another object literal.
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5,
    },
  },
};

// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

console.log(o1.d); // 5

//!---------------- Inheriting Methods ---------------------------------------
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3
// When calling parent.method in this case, 'this' refers to parent

// child is an object that inherits from parent
const child = {
  __proto__: parent,
};
console.log(child.method()); // 3
// When child.method is called, 'this' refers to child.
// So when child inherits the method of parent,
// The property 'value' is sought on child. However, since child
// doesn't have an own property called 'value', the property is
// found on the [[Prototype]], which is parent.value.

child.value = 4; // assign the value 4 to the property 'value' on child.
// This shadows the 'value' property on parent.
// The child object now looks like:
// { value: 4, __proto__: { value: 2, method: [Function] } }

console.log(child.method()); // 5
// Since child now has the 'value' property, 'this.value' means child.value instead

//! ------------------ Prototype String -------------------------
let name = "Thomas Anderson";

String.prototype.sayHello = function () {
  console.log("Hello from String!");
};

name.sayHello(); // Hello from String!
