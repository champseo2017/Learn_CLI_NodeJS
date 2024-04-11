import chalk from "chalk";
import figlet from "figlet";

import inquirer from "inquirer";

export async function hello() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      default: "Guest",
    },
  ]);

  console.log(`Hello, ${answers.name}!`);
}
