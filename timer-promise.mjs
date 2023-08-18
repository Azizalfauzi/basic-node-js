import timer from "timers/promises";

// console.info(new Date());
// const name = await timer.setTimeout(5000, "Aziz ");
// console.info(new Date());
// console.info(name);

for await (const startTime of timer.setInterval(1000, "ignonre")) {
  console.info(`Start time at ${new Date()}`);
}
