// console.log("Hello World!");

// console.time("loop");

// for (let i = 0; i < 100000000; i++) {
//   // looping
// }

// console.timeEnd("loop");

// console.log(process.pid);

// console.log(__dirname);

// console.log(__filename);

// 

// console.log("Before");

// setTimeout(function () {
//   console.log('Hello after 1 second');
// }, 1000);

// console.log("After");

// let count = 1;
// let maxCount = 5;

// let myInterval = setInterval(function(){
//   console.log(count);
//   count = count + 1;

//   if(count > maxCount){
//     clearInterval(myInterval);
//   }

// }, 1000);

// let myURL = new URL('https://myProductInventory.com/products?sort=asc&onSale=false');

// // for(const x of myURL.searchParams){
// //   console.log(x[0], x[1]);
// // }

// for( const [key, value] of myURL.searchParams){
//   console.log(key, value)
// }

// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// myEmitter.on('click', function () {
//   console.log('click occurred!');
// });

// setTimeout(function(){
//   myEmitter.emit('click');
// },1000)

// const fs = require("fs");


// fs.readFile('names.csv', function (err, fileData) {
//   if (err) console.log(err);
//   else {
    
//     let namesArray = fileData.toString().split(",");
//     for(let i = 0; i < namesArray.length; i++){
//       console.log(namesArray[i]);
//     }
    
//     //console.log(fileData.toString().split(","));
//   }
// });

// fs.readdir('img', function (err, filesArray) {
//   if (err) console.log(err);
//   else {
//     console.log(filesArray);
//   }
// });

// const path = require('path');

// console.log('Absolute path to about.html');

// console.log(path.join(__dirname, '/about.html')); // with leading slash
// console.log(path.join(__dirname, '//about.html')); // with multiple leading slashes
// console.log(path.join(__dirname, 'about.html')); // without leading slash
// console.log(path.join(__dirname, '\about.html')); // with incorrect leading slash


const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('First Name: ', function (fName) {
  rl.question('Last Name: ', function (lName) {
    rl.question('Age: ', function (age){
      console.log('Hello: ' + fName + ' ' + lName + ' - you are ' + age + ' years old');
      rl.close();
    });
  });
});

