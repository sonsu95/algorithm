function numberOfSteps(num: number): number {
    let cnt = 0;
    let calNum = num;

    while(calNum !== 0) {
        if (calNum % 2 === 0) {
            calNum /= 2;
        } else {
            calNum -= 1;
        }
        cnt++;
    }

    return cnt;
};