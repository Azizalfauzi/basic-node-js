import util from "util";

const firstname = "Aziz";
const lastname = "Alfauzi";

console.info(`Hello ${firstname}`);
console.info(util.format("Hello %s %s", firstname, lastname));

const person = {
  firstname: "Aziz",
  lastname: "Alfa",
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
