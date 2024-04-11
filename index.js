#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";

program.version("1.0.0").description("My Node CLI");

program.action(() => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose an option:",
        choices: ["Option 1", "Option 2", "Option 3"],
      },
    ])
    .then((answers) => {
      const spinner = ora(`Doing ${answers.choice}...`).start();
      setTimeout(() => {
        spinner.succeed(chalk.green("Done!"));
      }, 3000);
    })
    .catch((error) => {
      console.log(chalk.red(`An error occurred: ${error}`));
    });
});

program.parse(process.argv);

/* 
โค้ดที่ให้มาเป็นการใช้ Inquirer.js และ Ora เพื่อสร้างแบบสอบถามแบบ List และแสดงแอนิเมชั่นโหลดเมื่อผู้ใช้เลือกตัวเลือก โดยมีการใช้ Chalk เพื่อเพิ่มสีให้กับข้อความแสดงผล

คำอธิบายโค้ดทีละส่วน:

1. `inquirer.prompt([...])`: สร้างแบบสอบถามแบบ List โดยใช้ Inquirer.js
   - `type: 'list'`: กำหนดประเภทคำถามเป็น List
   - `name: 'choice'`: กำหนดชื่อสำหรับเก็บค่าคำตอบ
   - `message: 'Choose an option:'`: ข้อความคำถามที่แสดงให้ผู้ใช้
   - `choices: ['Option 1', 'Option 2', 'Option 3']`: ตัวเลือกที่ให้ผู้ใช้เลือก

2. `.then((answers) => { ... })`: เมื่อผู้ใช้เลือกตัวเลือกแล้ว จะเข้าสู่ callback นี้
   - `const spinner = ora(`Doing ${answers.choice}...`).start();`: สร้างและเริ่มแสดงแอนิเมชั่นโหลดด้วย Ora
     - ข้อความที่แสดงจะประกอบด้วยคำว่า "Doing" ตามด้วยตัวเลือกที่ผู้ใช้เลือก (ค่าจาก `answers.choice`)
   - `setTimeout(() => { ... }, 3000);`: หลังจากผ่านไป 3 วินาที (3000 มิลลิวินาที) จะเข้าสู่ callback นี้
     - `spinner.succeed(chalk.green("Done!"));`: หยุดแอนิเมชั่นโหลดและแสดงข้อความ "Done!" เป็นสีเขียวด้วย Chalk

3. `.catch((error) => { ... })`: ถ้ามีข้อผิดพลาดเกิดขึ้นระหว่างการถามคำถาม จะเข้าสู่ callback นี้
   - `console.log(chalk.red(`An error occurred: ${error}`));`: แสดงข้อความแจ้งเตือนพร้อม error ที่เกิดขึ้น โดยใช้สีแดงด้วย Chalk

เมื่อรันโค้ดนี้ ขั้นตอนที่เกิดขึ้นจะเป็นดังนี้:

1. แสดงคำถามแบบ List ด้วย Inquirer.js ให้ผู้ใช้เลือกตัวเลือกจาก "Option 1", "Option 2", "Option 3"
2. เมื่อผู้ใช้เลือกตัวเลือกแล้ว จะเริ่มแสดงแอนิเมชั่นโหลดด้วย Ora พร้อมข้อความ "Doing (ตัวเลือกที่ผู้ใช้เลือก)..."
3. หลังผ่านไป 3 วินาที แอนิเมชั่นโหลดจะหยุดและแสดงข้อความ "Done!" เป็นสีเขียวด้วย Chalk
4. ถ้ามีข้อผิดพลาดเกิดขึ้น จะแสดงข้อความแจ้งเตือนพร้อม error ด้วยสีแดงผ่าน Chalk

โค้ดนี้เป็นตัวอย่างของการใช้ Inquirer.js, Ora และ Chalk ร่วมกันเพื่อสร้าง CLI ที่มีปฏิสัมพันธ์และตอบสนองต่อผู้ใช้ได้ดี ช่วยทำให้ CLI ดูมีชีวิตชีวา น่าใช้งาน และแสดงผลได้อย่างเหมาะสมตามสถานการณ์ต่างๆ
*/
