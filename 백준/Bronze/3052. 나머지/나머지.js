const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./index.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

/**
 * Case 1
 * Memory: 9328kb
 * Time: 116ms
 */
// const arr = input.map(x => Number(x));
// arr.pop();
// const resultArr = arr.map(x => x % 42);
// const delDup = [...new Set(resultArr)];
// console.log(delDup.length);

/**
 * Case 2
 * Memory: 9328kb
 * Time: 120ms
 */
let data = input.map(Number);
let mySet = new Set();

for (let i = 0; i < 10; i++) {
    mySet.add(data[i] % 42);
}

console.log(mySet.size);
