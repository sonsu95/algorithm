function solution(quiz) {
    const resultArr = [];

    for (let i = 0; i < quiz.length; i++) {
        const split = quiz[i].split('=');

        const innerCal = split[0].trim().split(' ');
        const innerResult = Number(split[1]);

        let calResult = Number(innerCal[0]);
        for (let j = 0; j < innerCal.length; j++) {
            if (innerCal[j] === '+') {
                calResult += Number(innerCal[j + 1]);
                j += 1;
            } else if (innerCal[j] === '-') {
                calResult -= Number(innerCal[j + 1]);
                j += 1;
            }
        }
        calResult === innerResult ? resultArr.push("O") : resultArr.push("X");
    }
    return resultArr;
}