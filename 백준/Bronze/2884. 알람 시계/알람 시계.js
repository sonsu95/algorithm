const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const hour = Number(input[0].split(' ')[0]);
const minute = Number(input[0].split(' ')[1]);
const setAlarm45MinuteEarlier = (hour, minute) => {
    let resultHour;
    let resultMinute;
    if (hour === 0) {
        if (minute >= 45) {
            resultHour = hour;
            resultMinute = minute - 45;
        } else {
            resultHour = 24 - (Math.abs(hour - 1));
            resultMinute = minute + 15;
        }
    } else {
        if (minute >= 45) {
            resultHour = hour;
            resultMinute = minute - 45;
        } else {
            resultHour = hour - 1;
            resultMinute = minute + 15;
        }
    }
    console.log(resultHour, resultMinute);
}
setAlarm45MinuteEarlier(hour, minute);