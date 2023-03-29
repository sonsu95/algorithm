const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input.map(Number);
let max = arr[0];
arr.forEach((num, idx) => {
    max <= num ? max = num : null;
})
console.log(max + '\n' + (arr.indexOf(max) + 1));
