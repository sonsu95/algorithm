const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./index.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const data = input[0].trim() + "??!";

console.log(data)