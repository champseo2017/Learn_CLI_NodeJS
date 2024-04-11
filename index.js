#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";

program
  .version("1.0.0")
  .description("My Node CLI")
  .option("-n, --name <type>", "Add your name")
  .action((options) => {
    console.log(chalk.blue(`Hey GG, ${options.name}`));
    console.log(chalk.green(`Hey, ${options.name}`));
    console.log(chalk.red(`Hey, ${options.name}`));
    /* 
        chalk.blue(), chalk.green(), chalk.red():
        เป็นฟังก์ชันของ Chalk ที่ใช้กำหนดสีของข้อความ
        chalk.blue() จะแสดงข้อความเป็นสีน้ำเงิน
        chalk.green() จะแสดงข้อความเป็นสีเขียว
        chalk.red() จะแสดงข้อความเป็นสีแดง
        สามารถใช้สีอื่นๆ ได้อีกมาก เช่น chalk.yellow(), chalk.magenta(), chalk.cyan() เป็นต้น
    */
  });

program.parse(process.argv);
