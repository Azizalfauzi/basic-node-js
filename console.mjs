import console, { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("app.log");

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Hello Bandung");
log.error("Hello World");
const person = {
  firstName: "Aziz",
  lastName: "Alfauzi",
};
log.table(person);
