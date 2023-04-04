const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

/**
 * Case 1
 * Memory : 91140kb
 * Time : 436ms
 */
// const n = Number(input[0]);
// const arr = input[1].split(' ').map(Number);
// console.log(Math.min(...arr), Math.max(...arr));

/**
 * Case 2
 * Memory : 107308kb
 * Time : 964ms
 */
// const n = Number(input[0]);
// const arr = input[1].split(' ').map(Number);
// const sort = arr.sort((a, b) => a > b ? 1 : -1);
// console.log(sort[0], sort[sort.length -1])



/**
 * Case 3
 * Memory : 86256kb
 * Time : 500ms
 */
// const n = Number(input[0]);
// const arr = input[1].split(' ').map(Number);
// let max = arr[0];
// let min = arr[0];
// arr.forEach((num, idx) => {
//     num > max ? max = num : null;
//     num < min ? min = num : null;
// })
// console.log(min, max);


/**
 * Case 4
 * Memory: 88268kb
 * Time: 488ms
 */
// const n = Number(input[0]);
// const arr = input[1].split(' ').map(Number);
//
// let min = 1000001; // 일단 큰 수로 초기화
// let max = -1000001; // 일단 작은 수로 초기화
// for (let i = 0; i < n; i++) {
//     if (min > arr[i]) min= arr[i];
//     if (max < arr[i]) max = arr[i];
// }
// console.log(min, max);

/**
 * Case 5
 * Memory: 86952kb
 * Time: 528ms
 */
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let min = arr.reduce((a, b) => Math.min(a, b));
let max = arr.reduce((a, b) => Math.max(a, b));
console.log(min, max)
