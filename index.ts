#! /usr/bin/env node

import inquirer from "inquirer";
// 1- computer will generate a random number

// 2- user input for guessing number

// 3- compare user input with computer generated number and show result

const rendomNumber = Math.floor(Math.random() * 10);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if(answer.userGuessedNumber === rendomNumber ){
    console.log("Congratulations! you gueesd right number.");
}else{
    console.log("You guessed wrong number");
}