function solution(array, n) {
    let cnt = 0;
    array.forEach((num, idx) => {
        if (num === n) cnt++;
    })
    return cnt;
}