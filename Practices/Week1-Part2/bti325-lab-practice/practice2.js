const readline = require('readline');
const fs = require('fs');


const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("favourite type of food: (j) Junk Food - (h) Healthy Food: ", function(favFoodType){
  if(favFoodType.toUpperCase() == "J"){
    rl.question("Which file stores your Junk Food: ", function(junkFoodFile){
      fs.readFile(junkFoodFile, function(err, junkFoodFileData){
        if(err){
          console.log(err.message);
        }else{
          let junkFoodString = junkFoodFileData.toString().replace(/\s+/g, ' ');
          let junkFoodWords = junkFoodString.replace(/[^\w\s\']/g, "").split(' ');
          console.log(junkFoodWords);
        }
      });
      rl.close();
    });
  }else if(favFoodType.toUpperCase() == "H"){
    rl.question("Which file stores your Healthy Food: ", function(healthyFoodFile){
      console.log("TODO: process " + healthyFoodFile)
      rl.close();
    });

  }else{
    console.log("invalid choice");
    rl.close();
  }
});