import fs from "fs";

const writter = fs.createWriteStream("target.log");

writter.write("Aziz");
writter.write("Alfauzi");
writter.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
  console.info(data.toString());
});
