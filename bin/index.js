#!/usr/bin/env node
import { program } from "commander";
import { hello } from "../src/commands/hello.js";
import { goodbye } from "../src/commands/goodbye.js";

program.command("hello").description("Say hello").action(hello);

program
  .command("goodbye")
  .description("Leave a farewell message")
  .action(goodbye);

program.parse(process.argv);
