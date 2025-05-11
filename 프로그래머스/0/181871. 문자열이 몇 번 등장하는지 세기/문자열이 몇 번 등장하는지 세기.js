function solution(myString, pat) {
    const arrCnt = myString.length - pat.length + 1;
    let cnt = 0;
    for (let i = 0; i < arrCnt; i++) {
        if (myString.slice(i, pat.length + i) === pat) cnt += 1
    }
    return cnt;
}