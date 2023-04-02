const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./index.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const data = input[0].split(' ');
const a = data[0];
const b = data[1]
console.log(a / b)