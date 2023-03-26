const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

const result1 = a * parseInt(input[1][2]);
const result2 = a * parseInt(input[1][1]);
const result3 = a * parseInt(input[1][0]);
const result4 = a * b;
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
