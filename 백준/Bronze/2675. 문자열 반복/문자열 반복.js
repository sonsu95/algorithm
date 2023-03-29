const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./index.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = Number(input[0]);
for (let i = 1; i <= n; i++) {

let [r, s] = input[i].split(' ');
let result = '';
for (let j = 0; j < s.length; j++) {
    result += s.charAt(j).repeat(r);
}
console.log(result)
}