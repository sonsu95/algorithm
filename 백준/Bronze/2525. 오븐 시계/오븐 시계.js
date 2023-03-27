const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const hour = Number(input[0].split(' ')[0]);
const minute = Number(input[0].split(' ')[1]);
const cookingMinute = Number(input[1].split(' ')[0]);

const cal = (hour, minute, cookingMinute) => {
    let resultHour = hour + Math.floor((minute + cookingMinute) / 60);
    let resultMinute = (minute + cookingMinute) % 60

    resultHour = resultHour >= 24 ? resultHour - 24 : resultHour;
    
    return console.log(resultHour, resultMinute);
}

cal(hour, minute, cookingMinute);