const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./index.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const max = Math.max(...arr);
const reAvgArr = arr.map(x => x / max * 100);
console.log(reAvgArr.reduce((a, b) => a + b) / n);
