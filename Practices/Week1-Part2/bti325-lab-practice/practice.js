const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Why did the chicken cross the road? (a) - to get to the other side. (b) - not sure: ", function(chickenCrossing){
  if(chickenCrossing.toUpperCase() == 'A'){
    rl.question("What's on the other side? ", function(otherSide){
      console.log(otherSide + " is on the other side");
      rl.close();
    });
  }else if(chickenCrossing.toLowerCase() == 'b'){
    rl.question("any ideas? ", function(chickenIdeas){
      console.log("because " + chickenIdeas);
      rl.close();
    });
  }else{
    console.log("invalid choice");
    rl.close();
  }

  
  
});
