const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./index.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const sentence = input[0];
const solution = (sentence) => {
    return sentence.trim() === "" ? 0 : sentence.trim().split(" ").length;
}

console.log(solution(sentence));

