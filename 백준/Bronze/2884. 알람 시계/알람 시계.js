const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const hour = Number(input[0].split(' ')[0]);
const minute = Number(input[0].split(' ')[1]);
const setAlarm45MinuteEarlier = (hour, minute) => {
    if (minute < 45) {
        hour -= 1;
        minute += 15;
        if (hour < 0) hour = 23;
    } else minute -= 45;
    console.log(hour, minute);
}
setAlarm45MinuteEarlier(hour, minute);