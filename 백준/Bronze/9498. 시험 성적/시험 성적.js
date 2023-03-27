const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const data = parseInt(input[0]);

function score(value) {
    if (90 <= value && value <= 100 ) return 'A';
    else if (80 <= value && value <= 89) return 'B';
    else if (70 <= value && value <= 79) return 'C';
    else if (60 <= value && value <= 69) return 'D';
    else return 'F';
}
console.log(score(data));