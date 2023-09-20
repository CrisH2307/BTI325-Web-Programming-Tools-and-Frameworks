function outputA() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(randomTime % 2 == 0){ // even
        return resolve("A"); // resolve and exit the function
      }else{ // odd
        reject("unable to output A"); return; // reject and exit the function
      }
      console.log("I'm not executed, because of the return statements");
    }, randomTime);
  });
}

function outputB() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(randomTime % 2 == 0){ // even
        resolve("B")
      }else{ // odd
        reject("unable to output B")
      }
     
    }, randomTime);
  });
}

function outputC() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(randomTime % 2 == 0){ // even
        resolve("C");
      }else{ // odd
        reject("unable to output C");
      }
    }, randomTime);
  });
}

// outputA().then(data=>{
//   outputB().then(bData=>{
//     outputC().then(cData=>{
//       console.log("complete")
//     }).catch(cErr=>{
//       console.log(cErr);
//     });
//   }).catch(bErr=>{
//     console.log(bErr);
//   });
// }).catch(err=>{
//   console.log(err);
// });

// outputA().then((data)=>{
//   console.log(data);
//   return outputB();
// }).then(data=>{
//   console.log(data);
//   return outputC();
// }).then(data=>{
//   console.log(data);
// }).catch(err=>{
//   console.log(err);
// });


async function executeABC(){
  try{
    console.log(await outputA());
    console.log(await outputB());
    let c = await outputC(); // same as above, only with an extra step
    console.log(c);
  }catch(err){
    console.log(err);
  }finally{
    console.log("finally :)")
  }
}

executeABC();