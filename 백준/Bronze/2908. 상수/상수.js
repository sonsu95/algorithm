const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./index.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = input[0].split(' ').map(Number);
const firstReverse = Number(n[0].toString().split('').reverse().join(''))
const secondReverse = Number(n[1].toString().split('').reverse().join(''))
const resultArr = [firstReverse, secondReverse];
console.log(Math.max(...resultArr))
