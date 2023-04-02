const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./index.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [A, B, C] = input[0].split(" ").map(Number);

console.log(A + B + C)