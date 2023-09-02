// Callback Functions

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

// ////////////////////////////////////////

// Promises

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

// outputA()
//   .then((data) => {
//     console.log(data); // output the result of "outputA()" to the console
//     return outputB();
//   })
//   .then((data) => {
//     console.log(data); // output the result of "outputB()" to the console
//     return outputC();
//   })
//   .then((data) => {
//     console.log(data); // output the result of "outputC()" to the console
//   })
//   .catch((err) => {
//     console.log(err); // output the error to the console
//   });

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

// ////////////////////////////////////////
