import inquirer from "inquirer";

const systemGeneratedNo = Math.floor(Math.random() * 10);

const answer = inquirer.prompt([
    {
        type:"number",
        name:"userGuess",
        message:"write your guess:"
    }
])
const {userGuess} = answers;
//console.log(userGuess,"userGuess",systemGeneratedNo,'Sys');


if(userGuess === systemGeneratedNo){
     console.log("yeaaa your answer is correct \n you win");
}
// else {
//     console.log("please try again better luck next time");
    
// }
