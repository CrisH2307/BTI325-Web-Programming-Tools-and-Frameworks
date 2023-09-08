const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Asian or Filipono?: (j) Asian - (h) Filipino", function(chicks){
    if(chicks.toUpperCase() == "J")
    {
        rl.question("Which part do you like: ", function(chicksFile)
        {
            fs.readFile(chicks, function(err, chicksData)
            {
                if(err)
                {
                    console.log(err.message);
                }
                else
                {
                    let chickString = chicksData.toString().replace(/\s+/g, '');
                    let chickWord = chickString.replace();
                }
            })
            rl.close();
        });
    }
    else if (chicks.toUpperCase() == "H")
    {
        rl.question("Which part you re gonna play" , function(anotherchicksFile)
        {
            fs.readFile(chicks, function(err, chicksData)
            {
                if(err)
                {
                    console.log(err.message);
                }
                else
                {
                    let chickString = chicksData.toString().replace(/\s+/g, '');
                }
            })
            rl.close();
        });
    }
    else{
        console.log("I dont know");
        rl.close();
    }
});