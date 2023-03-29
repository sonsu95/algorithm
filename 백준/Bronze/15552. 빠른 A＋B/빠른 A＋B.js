const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

let result = [];
for (let i = 1; i <= n; i++) {
    const data = input[i].split(' ').map(Number);
    result.push(data[0] + data[1]);
}
console.log(result.join('\n'));