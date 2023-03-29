const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./index.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length - 1; i++) {
    const resultArr = [];
    const n = Number(input[i][0]);
    const data = input[i].split(' ');
    if (data[1]) {
        for (let j = 0; j < data[1].length; j++) {
            for (let k = 0; k < n; k++) {
                resultArr.push(data[1][j]);
            }
        }
        console.log(resultArr.join(''));
    }
}