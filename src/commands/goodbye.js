import chalk from "chalk";
import figlet from "figlet";

import inquirer from "inquirer";

export async function goodbye() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "farewellMessage",
      message: "Leave a farewell message:",
      default: "Goodbye",
    },
  ]);

  console.log(`${answers.farewellMessage}`);
}
