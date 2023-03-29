const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./index.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arr = input.map(x => Number(x));
arr.pop();
const resultArr = arr.map(x => x % 42);
const delDup = [...new Set(resultArr)];
console.log(delDup.length);