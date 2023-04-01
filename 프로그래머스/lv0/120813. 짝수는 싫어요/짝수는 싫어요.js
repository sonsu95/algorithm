function solution(num) {
    const oddArr = [];
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 1) oddArr.push(i);
    }
    return oddArr;
}
