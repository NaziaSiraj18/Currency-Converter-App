#! /usr/bin/env Node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to 'CodeWithNazia' -currency Converter\n"));
// Define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1, // base currency
    "EUR": 0.91, // European Currency (Euro)
    "GBP": 0.76, // British Pounds (GBP)
    "IMR": 74.57, // Indian Rupee
    "PKR": 289, // Pakistan Rupees
    "AUD": 1.65, // Australian Dollar
    "CAD": 1.3, // Canadian Dollar
    "JYP": 113, // Japanese Currency (Yen)
    // Add more currencies and their exchange rates here
};
// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "GBP", "IMR", "PKR", "AUD", "CAD", "JYP"]
    },
    {
        name: "to_currency",
        message: "Select the currency to convert into:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "IMR", "PKR", "AUD", "CAD", "JYP"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
//Perform currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from_currency]; // Exchange rate
let to_amount = exchange_rate[user_answer.to_currency]; // Exchange rate 
let amount = user_answer.amount;
// Formula of conversion
let base_amount = amount / from_amount; //USD base currency
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`converted Amount = ${chalk.green(converted_amount.toExponential(2))}`);
