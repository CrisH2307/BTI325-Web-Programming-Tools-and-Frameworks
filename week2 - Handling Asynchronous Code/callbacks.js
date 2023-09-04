//! HANDLING ASYNCHRONOUS CODE
/*
Asynchronous Programming is a technique that enable your program to start a potentially long-running task
and still be able to be responsive to other events while that task runs, rather than having to wait until
that task has finished. Once that task has finished, your program is presented with the result. 
*/

//! Callbacks
/*
Long-running tasks will not cause delays within our main execution logic. However, it also means that 
we need to find a way to execute code when a long-running task has completed
*/
console.log("Hello");

setTimeout(() => {
  console.log("World");
}, 2000);
//  we will wait 2 seconds (2000 milliseconds) and execute some code before and after the function

console.log("!");

//! Defining Functions with Callbacks
/*
let's say that we have a function called "connectToDatabase" that establishes a database connection 
after a random amount of time (between 1 and 2000 milliseconds). We also have a function called "queryData" 
that also takes a random amount of time to complete (in this case, it is between 1 and 1000 milliseconds).
*/
function connectToDatabase() {
  let randomTime = Math.floor(Math.random() * 2000) + 1;

  setTimeout(() => {
    console.log("Connection Established");
  }, randomTime);
}

function queryData() {
  let randomTime = Math.floor(Math.random() * 1000) + 1;

  setTimeout(() => {
    console.log("Query Complete");
  }, randomTime);
}

// or

function connectToDatabase(queryFunction) {
  let randomTime = Math.floor(Math.random() * 2000) + 1;

  setTimeout(() => {
    console.log("Connection Established");
    queryFunction();
  }, randomTime);
}
connectToDatabase(queryData);

//! Adding Params
function connectToDatabase(queryFunction, query) {
  let randomTime = Math.floor(Math.random() * 2000) + 1;

  setTimeout(() => {
    console.log("Connection Established");
    queryFunction(query);
  }, randomTime);
}
queryData("select * from Employees");

//! Completed
function connectToDatabase(queryFunction, query) {
  let randomTime = Math.floor(Math.random() * 2000) + 1;

  setTimeout(() => {
    console.log("Connection Established");
    queryFunction(query);
  }, randomTime);
}

function queryData(query) {
  let randomTime = Math.floor(Math.random() * 1000) + 1;

  setTimeout(() => {
    console.log(query);
  }, randomTime);
}

connectToDatabase(queryData, "select * from Employees");
