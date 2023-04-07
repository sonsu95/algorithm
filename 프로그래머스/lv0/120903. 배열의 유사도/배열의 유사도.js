function solution(s1, s2) {
    let cnt = 0;
    s2.forEach(item => {
        if (s1.includes(item)) cnt++;
    })
    return cnt;
}