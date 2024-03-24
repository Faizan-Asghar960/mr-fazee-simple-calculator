#! /usr/bin/env node

import inquirer from "inquirer";

// printing a wellcome Message
console.log("\n\twellcome TO \*codewithMr.fazee\* . CLI Simple Calculator");


// asking questions from Users through inquirer

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstNumber"},
    {message: "Enter Second Number", type: "number", name: "secondNumber"},
    {
        message: "Select one Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Divison"] 
    },
]);

// Conditional statements if-else
if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operator === "Subtractions"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.Operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if(answers.operator === "Divison"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("pleace select valid operator")
}