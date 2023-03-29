const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');


/**
 * Case 1
 * Memory: 9328kb
 * Time: 120ms
 */
// const arr = input.map(Number);
// let max = arr[0];
// arr.forEach((num, idx) => {
//     max <= num ? max = num : null;
// })
// console.log(max + '\n' + (arr.indexOf(max) + 1));

/**
 * Case 2
 * Memory: 9324kb
 * Time: 120ms
 */
const arr = input.map(Number);
let max = Math.max(...arr);
console.log(max + '\n' + (arr.indexOf(max) + 1));
