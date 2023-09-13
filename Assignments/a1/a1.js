/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* 
        Name: Cris Huynh Student 
        ID: 105444228 
        Date: Sep 7th, 2023
        *
********************************************************************************/

const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Do you wish to process a File (f) or directory (d): ", function(ans)
{
    if(ans.toLowerCase() == "f")
    {
        rl.question("File: ", function(foodFile)
        {
            fs.readFile(foodFile, function(err, foodData)
            {
                    if(err)
                    {
                        console.log(err);           
                    }
                    else
                    {
                        let foodString = foodData.toString().replace(/\s+/g, ' ');
                        let foodWords = foodString.replace(/[^\w\s\']/g, "").split(' ');
                        let longestWord = '';
                        let wordFrequency = {};

                        for (const word of foodWords) 
                        {
                            // Update longestWord if the current word is longer
                            if (word.length > longestWord.length) 
                            {
                                longestWord = word;
                            }

                            // Count word frequencies
                            if (word in wordFrequency) 
                            {
                                wordFrequency[word]++;
                            } else 
                            {
                                wordFrequency[word] = 1;
                            }
                        }

                        // Find the most repeated word
                        let mostRepeatedWord = '';
                        let maxFrequency = 0;

                        for (const word in wordFrequency)
                        {
                            if (wordFrequency[word] > maxFrequency) 
                            {
                                mostRepeatedWord = word;
                                maxFrequency = wordFrequency[word];
                            }
                        }
                    
                    //* Optional:
                    console.log(`Number of Characters (including spaces): ${foodString.length}`);
                    console.log(`Number of Words: ${foodWords.length}`);
                    console.log(`Longest Word: ${longestWord}`);
                    console.log(`Most Repeated Word: ${mostRepeatedWord} - ${maxFrequency} times`);
                    }
            })
            rl.close();
        })
    }
    else if (ans.toLowerCase() == "d")
    {
        rl.question("Directory: " , function(directory)
        {
            fs.readFile(directory, function(err, files)
            {
                if(err)
                {
                    console.log(err.message);
                }
                else
                {
                    outputFiles = files.reverse(); 
                    outputFiles = files.toString().replace(/\s+/g, ", "); 
                    console.log('Files (reverse aplhabetical order): ' + outputFiles); 
                }
                rl.close();
            });
        });
    }
    else{
        console.log("Invalid Section");
        rl.close();
    }
});

