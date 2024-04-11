#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";

program.version("1.0.0").description("My Node CLI");

program.action(() => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What' s your name?",
      },
    ])
    .then((answers) => {
      console.log(chalk.green(`Hey there, ${answers.name}`));
    });
});

program.parse(process.argv);
/* 
โค้ดนี้เป็นการสร้าง CLI ด้วย Node.js โดยใช้ไลบรารี Commander.js, Chalk และ Inquirer.js

1. นำเข้าไลบรารีที่จำเป็น:
   - Commander.js สำหรับจัดการ command และ option
   - Chalk สำหรับเพิ่มสีสันให้กับข้อความ
   - Inquirer.js สำหรับสร้างแบบสอบถามแบบ interactive

2. กำหนดเวอร์ชันและคำอธิบายของ CLI ด้วย `program.version()` และ `program.description()`

3. กำหนด action ให้กับ CLI ด้วย `program.action()` ซึ่งเป็นฟังก์ชันที่จะทำงานเมื่อ CLI ถูกเรียกใช้:
   - ใช้ `inquirer.prompt()` เพื่อแสดงแบบสอบถามให้ผู้ใช้ป้อนชื่อ
   - แบบสอบถามประกอบด้วย type (ประเภทคำถาม), name (ชื่อของคำตอบ), และ message (ข้อความคำถาม)
   - เมื่อผู้ใช้ตอบคำถามแล้ว ค่าคำตอบจะถูกส่งมาใน `answers`
   - แสดงข้อความทักทายพร้อมชื่อผู้ใช้ด้วย `console.log()` และใช้ Chalk เพื่อทำให้ข้อความเป็นสีเขียว

4. เรียกใช้ `program.parse(process.argv)` เพื่อแยกวิเคราะห์ command-line arguments และเริ่มทำงานตาม action ที่กำหนดไว้

เมื่อรันสคริปต์นี้ จะเกิดเหตุการณ์ดังนี้:

1. CLI จะแสดงคำถามว่า "What's your name?"
2. ผู้ใช้พิมพ์ชื่อของตนเองและกด Enter
3. CLI จะแสดงข้อความทักทายพร้อมชื่อผู้ใช้ เช่น "Hey there, John" เป็นสีเขียว

โค้ดนี้เป็นตัวอย่างพื้นฐานของการสร้าง CLI ที่มีปฏิสัมพันธ์กับผู้ใช้ โดยใช้ Commander.js ในการจัดการโครงสร้างพื้นฐาน, Inquirer.js สำหรับซักถามข้อมูลจากผู้ใช้แบบ interactive, และ Chalk เพื่อเพิ่มสีสันให้กับ output

*/
