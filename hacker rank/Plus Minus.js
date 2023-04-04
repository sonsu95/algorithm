function plusMinus(arr) {
    let positiveCnt = 0;
    let negativeCnt = 0;
    let zeroCnt = 0;
    const length = arr.length;

    arr.forEach((item) => {
        if (item > 0) positiveCnt++
        else if (item === 0) zeroCnt++
        else negativeCnt++
    });

    const positiveResult = (positiveCnt/length).toFixed(6);
    const negativeResult = (negativeCnt/length).toFixed(6);
    const zeroResult = (zeroCnt/length).toFixed(6);
    console.log(positiveResult);
    console.log(negativeResult);
    console.log(zeroResult);
}

plusMinus([-4, 3, -9, 0, 4, 1])