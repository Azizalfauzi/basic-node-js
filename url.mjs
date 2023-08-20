import { URL } from "url";

const udz = new URL(
  "https://www.udemy.com/course/nodejs-pemula-sampai-mahir/learn/lecture/30053932#overview"
);

console.info(udz.toString());
console.info(udz.href);
console.info(udz.protocol);
console.info(udz.hostname);
console.info(udz.pathname);
console.info(udz.searchParams);
