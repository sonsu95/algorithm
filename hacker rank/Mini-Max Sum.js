function miniMaxSum(arr) {
    const copy = [...arr];
    const resultArr = [];
    let resultNum = 0;
    arr.forEach((num, idx) => {
        copy.splice(idx, 1);
        copy.forEach(num => {
            resultNum += num;
        })
        copy.splice(idx,0, num)
        resultArr.push(resultNum);
        resultNum = 0;
    })
    const smallNum = Math.min(...resultArr);
    const bigNum = Math.max(...resultArr);

    console.log(smallNum, bigNum);
}

miniMaxSum([1, 2, 3, 4, 5])