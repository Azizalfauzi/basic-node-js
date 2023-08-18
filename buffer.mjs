import { Buffer } from "buffer";
const buffer = Buffer.from("Aziz Alfauzi");

console.info(buffer);
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());
