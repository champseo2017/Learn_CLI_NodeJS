#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import figlet from "figlet";

console.log(
  chalk.green(figlet.textSync("It Goes On", { horizontalLayout: "full" }))
);

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
ไลบรารี Figlet และ Chalk เพื่อแสดงข้อความ ASCII art ด้วยสีเขียว

คำอธิบายโค้ดทีละบรรทัด:

1. `import figlet from "figlet";`: นำเข้าไลบรารี Figlet เพื่อใช้ในการสร้างข้อความ ASCII art

2. `console.log( ... );`: ใช้เพื่อแสดงผลข้อความผ่านทาง console

3. `chalk.green( ... )`: ใช้ไลบรารี Chalk เพื่อกำหนดสีของข้อความเป็นสีเขียว
   - `chalk` เป็น object ที่เรานำเข้ามาจากไลบรารี Chalk (ไม่ได้แสดงในโค้ดตัวอย่าง แต่ต้องมีการ import ก่อนใช้งาน)
   - `green()` เป็นเมธอดของ `chalk` ที่ใช้กำหนดสีเขียวให้กับข้อความ

4. `figlet.textSync("It Goes On", { horizontalLayout: "full" })`: สร้างข้อความ ASCII art ด้วย Figlet
   - `"It Goes On"` เป็นข้อความที่ต้องการแสดงเป็น ASCII art
   - `{ horizontalLayout: "full" }` เป็น option สำหรับปรับแต่งการแสดงผล ASCII art
     - `horizontalLayout: "full"` หมายถึงให้ ASCII art ขยายเต็มความกว้างของ console
   - `textSync()` เป็นเมธอดแบบ synchronous ของ Figlet ที่ใช้สร้าง ASCII art และคืนค่าเป็นสตริง

เมื่อรวมทุกอย่างเข้าด้วยกัน โค้ดนี้จะแสดงข้อความ "It Goes On" เป็น ASCII art ด้วยสีเขียว โดย ASCII art จะถูกสร้างโดย Figlet และสีเขียวจะถูกกำหนดโดย Chalk

ตัวอย่างผลลัพธ์ที่ได้เมื่อรันโค้ดนี้ (ข้อความจะเป็นสีเขียวเมื่อแสดงใน console ที่รองรับสี ANSI):

```
  ___   _     ____                   ___       
 |_ _| | |_  / ___| ___   ___  ___  / _ \ _ __ 
  | |  | __| \___ \/ _ \ / _ \/ __|| | | | '_ \
  | |  | |_   ___) | (_) |  __/\__ \| |_| | | | |
 |___|  \__| |____/ \___/ \___||___(_)___/|_| |_|
```

การใช้ Figlet ช่วยเพิ่มความน่าสนใจให้กับ CLI ของคุณ ด้วยการแสดงข้อความในรูปแบบ ASCII art ที่สะดุดตา ส่วน Chalk ช่วยเพิ่มสีสันให้กับข้อความ ทำให้ดูโดดเด่นและอ่านง่ายยิ่งขึ้น การใช้ทั้งสองไลบรารีร่วมกันช่วยสร้างประสบการณ์การใช้งาน CLI ที่ดึงดูดใจและน่าประทับใจได้
*/
