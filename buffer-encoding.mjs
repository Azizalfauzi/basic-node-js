import { Buffer } from "buffer";

const buffer = Buffer.from("Aziz Alfauzi", "utf-8");

console.info(buffer);
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));
// console.info(buffer.toString("base64url"));

const bufferBase64 = Buffer.from("QXppeiBBbGZhdXpp", "base64");
console.info(bufferBase64.toString("utf-8"));
