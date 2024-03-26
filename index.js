#! /usr/bin/env node
import inquirer from "inquirer";
console.log("========================================================");
console.log("                    Number Gussing Game                 ");
console.log("========================================================");
const NumberGussing = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGussNumber",
        type: "number",
        message: "Please Guess a Number Between 1-6 : "
    },
]);
if (answer.UserGussNumber === NumberGussing) {
    console.log("Congragulations you gusse a right number");
}
else {
    console.log("Sorry! You Lost");
}
