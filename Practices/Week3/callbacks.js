// function outputHello(afterHelloFunction, followUpFunction){
//   console.log("Hello");
//   afterHelloFunction(followUpFunction);
// }

// function outputWorld(afterWorldFunction){
//   setTimeout(()=>{
//     console.log("World");
//     afterWorldFunction();
//   },1000);
// }

// function exclaim(){
//   console.log("!");
// }

// outputHello(outputWorld, exclaim);

function connectToDatabase(queryDataFunction, query) {
  let randomTime = Math.floor(Math.random() * 2000) + 1;

  setTimeout(() => {
    console.log('Connection Established');
    queryDataFunction(query);
  }, randomTime);
}

function queryData(someQuery) {
  let randomTime = Math.floor(Math.random() * 1000) + 1;

  setTimeout(() => {
    console.log(someQuery);
  }, randomTime);
}

connectToDatabase(queryData,"select * from Employees");



