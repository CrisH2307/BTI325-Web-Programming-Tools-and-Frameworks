//! PROMISES AND ASYNC / AWAIT

//! Callback review
// output "A" after a random time between 0 & 3 seconds
function outputA(firstCallback, secondCallback) {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  setTimeout(() => {
    console.log("A");
    firstCallback(secondCallback);
  }, randomTime);
}

// output "B" after a random time between 0 & 3 seconds
function outputB(lastCallback) {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  setTimeout(() => {
    console.log("B");
    lastCallback();
  }, randomTime);
}

// output "C" after a random time between 0 & 3 seconds
function outputC() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  setTimeout(() => {
    console.log("C");
  }, randomTime);
}

// invoke the functions in order

outputA(outputB, outputC);
/*
In the above code, we have ensured the correct flow of execution of the three functions by passing both
follow up functions to the first function as parameters. The final function is then passed to the second
function as a callback, so that it may be executed in the right order.
*/

//! Promises
/* 
Resolve & Then​ 
A Promise obj is used for asynchronous computations and represents a value which may be available now, or
in the future, or never. Basically, what this means is that we can place our asynchronous code insisde a
promist obj as a function with specific parameters (resolve and reject)/ When our code is complete, we 
invoke the "resolve" function and if our code encounters an error, we can invoke the "reject" function. 
We can handle both of these situations later with the .then() method or (in the case of an error that we wish
to handle) the .catch() method. 
*/
// output "A" after a random time between 0 & 3 seconds
function outputA() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    // place our code inside a "Promise" function
    setTimeout(() => {
      console.log("A");
      resolve(); // call "resolve" because we have completed the function successfully
    }, randomTime);
  });
}

// call the outputA function and when it is "resolved", output a confirmation to the console

outputA().then(() => {
  console.log("outputA resolved!");
});

//! Adding Data
// output "A" after a random time between 0 & 3 seconds
function outputA() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    // place our code inside a "Promise" function
    setTimeout(() => {
      console.log("A");
      resolve("outputA resolved!"); // call "resolve" because we have completed the function successfully
    }, randomTime);
  });
}

// call the outputA function and when it is "resolved", output a confirmation to the console

outputA().then((data) => {
  console.log(data);
});

//! Reject and Catch
/*
To ensure that we handle this type of scenario gracefully, we can invoke the "reject" method instead of the 
"resolve" method and provide a reason why our asynchronous operation failed. This causes the promise to be in
a "rejected" state and the ".catch" function will be invoked, where we can gracefully handle the error. 
*/
// output "A" after a random time between 0 & 3 seconds
function outputA() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    // place our code inside a "Promise" function
    setTimeout(() => {
      console.log("-");
      reject("outputA rejected!"); // call "reject" because the function encountered an error
    }, randomTime);
  });
}

// call the outputA function and when it is "resolved" or "rejected, output a confirmation to the console

outputA()
  .then((data) => {
    console.log(data);
  })
  .catch((reason) => {
    console.log(reason);
  });
/*
If we want to immediately exit the function and prevent further execution of the code within the promise, 
we can invoke the "return" statement, immediately following the "resolve()" or "reject()" call, ie:
*/
// ...
reject();
return;
console.log("I will not be executed");
// ...

//! Completed Code
// output "A" after a random time between 0 & 3 seconds
function outputA() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomTime % 2 ? resolve("A") : reject("Error with outputA()");
    }, randomTime);
  });
}

// output "B" after a random time between 0 & 3 seconds
function outputB() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomTime % 2 ? resolve("B") : reject("Error with outputB()");
    }, randomTime);
  });
}

// output "C" after a random time between 0 & 3 seconds
function outputC() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomTime % 2 ? resolve("C") : reject("Error with outputC()");
    }, randomTime);
  });
}

async function showOutput() {
  try {
    let A = await outputA();
    console.log(A); // output the result of "outputA()" to the console

    let B = await outputB();
    console.log(B); // output the result of "outputB()" to the console

    let C = await outputC();
    console.log(C); // output the result of "outputC()" to the console
  } catch (err) {
    console.log(err); // output the error for outputA(), outputB() or outputC() to the console
  }
}

showOutput();

//! Async and Await
async function adder(num1, num2) {
  return num1 + num2;
}

adder(1, 2).then((result) => console.log(result)); //3
