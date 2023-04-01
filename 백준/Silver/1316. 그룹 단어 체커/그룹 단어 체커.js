const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./index.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const checkGroupWord = (word) => {
    let setData = new Set(word[0]);
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[i + 1]) {
            if (setData.has(word[i + 1])) {
                return false;
            } else {
                setData.add(word[i+ 1]);
            }
        }
    }
    return true;
}

const n = Number(input[0]);
let summary = 0;

for (let i = 1; i <= n; i++) {
    let data = input[i];
    if (checkGroupWord(data)) summary++;
}

console.log(summary);