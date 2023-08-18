import process from "process";

process.addListener("exit", (exitCode) => {
  console.info(`Node Js Exit with code ${exitCode}`);
});

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.info(process.env);

process.exit(1);

console.info("Hello");
