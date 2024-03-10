"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var systemGeneratedNo = Math.floor(Math.random() * 10);
var answer = inquirer_1.default.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your guess:"
    }
]);
var userGuess = answer.userGuess;
console.log(userGuess, "userGuess", systemGeneratedNo, 'Sys');
// if(userGuess === systemGeneratedNo){
// console.log("yeaaa your answer is correct \n you win");
// }else {
//     console.log("please try again better luck next time");
// }
