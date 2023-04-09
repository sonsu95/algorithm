function solution(n) {
    const factorial = (num) => {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    let cnt = 1;
    while (factorial(cnt) <= n) {
        cnt++;
    }
    return cnt - 1
}