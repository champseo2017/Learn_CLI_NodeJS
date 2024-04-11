#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";

program.version("1.0.0").description("My Node CLI");

program.action(() => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "confirmQuestion",
        message: "Are you sure you want to proceed?",
        default: true,
      },
    ])
    .then((answers) => {
      if (answers.confirmQuestion) {
        console.log(chalk.green(`User confirmed. Proceeding...`));
      } else {
        console.log(chalk.yellow(`User cancelled. Exiting...`));
      }
    })
    .catch((error) => {
      console.log(chalk.red(`An error occurred: ${error}`));
    });
});

program.parse(process.argv);

/* 
คำอธิบายโค้ด:

1. นำเข้าไลบรารี Inquirer.js ด้วย `import inquirer from 'inquirer'`

2. ใช้ `inquirer.prompt()` เพื่อแสดงคำถามแบบ Confirm โดยส่ง array ของ object ที่อธิบายคำถาม ประกอบด้วย:
   - `type: 'confirm'` ระบุว่าเป็นคำถามแบบ Confirm
   - `name: 'confirmQuestion'` กำหนดชื่อสำหรับเก็บค่าคำตอบ
   - `message: 'Are you sure you want to proceed?'` ข้อความคำถามที่จะแสดงให้ผู้ใช้
   - `default: true` ค่าเริ่มต้นของคำตอบ (ในที่นี้เป็น true หมายถึง "ใช่")

3. เมื่อผู้ใช้ตอบคำถามแล้ว ค่าคำตอบจะถูกส่งมาใน `answers` ซึ่งเป็น object ที่มี property ตามชื่อที่กำหนดใน `name`

4. ตรวจสอบค่าของ `answers.confirmQuestion`:
   - ถ้าเป็น `true` แสดงว่าผู้ใช้ตอบ "ใช่" ให้แสดงข้อความ "User confirmed. Proceeding..." และดำเนินการต่อในโค้ดที่เกี่ยวข้อง
   - ถ้าเป็น `false` แสดงว่าผู้ใช้ตอบ "ไม่" ให้แสดงข้อความ "User cancelled. Exiting..." และออกจากโปรแกรม

5. ถ้ามีข้อผิดพลาดเกิดขึ้นระหว่างการถามคำถาม จะเข้าสู่บล็อก `catch` และแสดงข้อความแจ้งเตือนพร้อม error ที่เกิดขึ้น

เมื่อรันโค้ดนี้ ผู้ใช้จะเห็นคำถามแบบ Confirm ว่า "Are you sure you want to proceed? (Y/n)" ถ้าผู้ใช้ตอบ "Y" (ใช่) โปรแกรมจะแสดงข้อความยืนยันและดำเนินการต่อ แต่ถ้าผู้ใช้ตอบ "n" (ไม่) โปรแกรมจะแสดงข้อความยกเลิกและจบการทำงาน

คำถามแบบ Confirm เป็นประโยชน์เมื่อต้องการให้ผู้ใช้ยืนยันการกระทำบางอย่างก่อนดำเนินการต่อ เช่น การลบข้อมูล, การบันทึกการเปลี่ยนแปลง หรือการออกจากโปรแกรม ช่วยป้องกันความผิดพลาดจากการกระทำโดยไม่ได้ตั้งใจของผู้ใช้
*/
