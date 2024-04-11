#!/usr/bin/env node

import { program } from "commander";
// นำเข้าฟังก์ชัน program จากไลบรารี Commander.js เพื่อใช้ในการสร้าง CLI

program
  .version("1.0.0")
  .description("My Node CLI") /* 
  กำหนดเวอร์ชันของ CLI ด้วย program.version()
  กำหนดคำอธิบายของ CLI ด้วย program.description()
  
  */
  .option("-n, --name <type>", "Add your name")
  /* 
    กำหนดออปชันสำหรับ CLI ด้วย program.option()
    ออปชัน -n หรือ --name ใช้สำหรับรับค่าชื่อผู้ใช้ โดย <type> ระบุว่าค่าที่รับเข้ามาเป็นค่าบังคับ
    ข้อความ "Add your name" เป็นคำอธิบายของออปชันนี้ ซึ่งจะแสดงในหน้าช่วยเหลือ (help) ของ CLI
  */
  .action((options) => {
    console.log(`Hey ${options.name}`);
    /* 
        กำหนด action ที่จะทำเมื่อมีการส่งออปชันเข้ามา ด้วย program.action()
        ฟังก์ชันที่ส่งเข้ามาจะรับค่าออปชันผ่านพารามิเตอร์ options
        ในที่นี้ action คือการแสดงข้อความทักทาย Hey ตามด้วยชื่อที่ได้รับจากออปชัน --name
    */
  });
program.parse(process.argv);
/* 
เรียกใช้ program.parse() เพื่อแยกวิเคราะห์ command-line arguments ที่ส่งเข้ามา
process.argv เป็น array ที่เก็บ command-line arguments ทั้งหมด
Commander.js จะจับคู่ arguments กับออปชันที่กำหนดไว้ และเรียก action ที่เกี่ยวข้อง
*/
