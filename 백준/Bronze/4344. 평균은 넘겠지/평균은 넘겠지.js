const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./index.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = Number(input[0]);
const resultArr = [];
for (let i = 1; i <= n; i++) {
    const arr = input[i].split(' ').map(Number);
    let len = arr[0];
    arr.shift();
    let sum = arr.reduce((a, b) => a + b);
    let avg = arr.filter(x => x > (sum / len))
    const percent = ((avg.length / len) * 100).toFixed(3)
    console.log(`${percent}%`)
}