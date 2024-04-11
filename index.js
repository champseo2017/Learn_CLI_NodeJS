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
คำอธิบายโค้ด:

1. นำเข้าไลบรารี Inquirer.js ด้วย `import inquirer from 'inquirer'`

2. ใช้ `inquirer.prompt()` เพื่อแสดงคำถามแบบ List โดยส่ง array ของ object ที่อธิบายคำถาม ประกอบด้วย:
   - `type: 'list'` ระบุว่าเป็นคำถามแบบ List
   - `name: 'fruit'` กำหนดชื่อสำหรับเก็บค่าคำตอบ
   - `message: 'What is your favorite fruit?'` ข้อความคำถามที่จะแสดงให้ผู้ใช้
   - `choices: ['Apple', 'Banana', 'Orange', 'Grape']` ตัวเลือกที่ให้ผู้ใช้เลือก เป็น array ของสตริง

3. เมื่อผู้ใช้เลือกตัวเลือกแล้ว ค่าคำตอบจะถูกส่งมาใน `answers` ซึ่งเป็น object ที่มี property ตามชื่อที่กำหนดใน `name`

4. แสดงข้อความที่บอกตัวเลือกที่ผู้ใช้เลือกด้วย `console.log()`

5. ถ้ามีข้อผิดพลาดเกิดขึ้นระหว่างการถามคำถาม จะเข้าสู่บล็อก `catch` และแสดงข้อความแจ้งเตือนพร้อม error ที่เกิดขึ้น

เมื่อรันโค้ดนี้ ผู้ใช้จะเห็นคำถามพร้อมรายการตัวเลือกผลไม้ให้เลือก เช่น:

```
? What is your favorite fruit? (Use arrow keys)
❯ Apple
  Banana
  Orange
  Grape
```

ผู้ใช้สามารถใช้ลูกศรขึ้นลงเพื่อเลื่อนไปยังตัวเลือกที่ต้องการ และกด Enter เพื่อเลือก จากนั้นโปรแกรมจะแสดงข้อความยืนยันตัวเลือกที่ผู้ใช้เลือก เช่น "Your favorite fruit is Banana"

คำถามแบบ List เหมาะสำหรับกรณีที่มีตัวเลือกให้เลือกจำนวนไม่มาก และต้องการให้ผู้ใช้เลือกเพียงตัวเลือกเดียว ช่วยป้องกันการป้อนค่าที่ไม่ถูกต้องจากผู้ใช้ และทำให้การเลือกตัวเลือกเป็นเรื่องง่ายและรวดเร็ว

คุณสามารถปรับแต่งตัวเลือกใน `choices` ได้ตามต้องการ รวมถึงเพิ่มตัวเลือกพิเศษอย่างเช่น separator หรือ disabled option เพื่อจัดกลุ่มและจำกัดตัวเลือกที่ให้ผู้ใช้เลือกได้อีกด้วย
*/
