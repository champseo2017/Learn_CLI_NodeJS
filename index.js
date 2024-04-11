#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";

program.version("1.0.0").description("My Node CLI");

program.action(() => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "fruit",
        message: "What is your favorite fruit?",
        choices: ["Apple", "Banana", "Orange", "Grape"],
      },
    ])
    .then((answers) => {
      console.log(chalk.green(`Your favorite fruit is ${answers.fruit}`));
    })
    .catch((error) => {
      console.log(chalk.red(`An error occurred: ${error}`));
    });
});

program.parse(process.argv);

/* 
And there are also Checkbox, Password, Rawlist and Expand. Feel free to explore more at https://github.com/SBoudrias/Inquirer.js
*/
