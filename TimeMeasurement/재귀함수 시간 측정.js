/**
 * 프로그래머스
 * 구슬을 나누는 경우의 수 문제에서 측정
 */


console.time('isRecursive')
function solution1(balls, share) {
    function factorial(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}

console.timeEnd('isRecursive');



console.time('isNotRecursive')
function solution2(balls, share) {
    function factorial(n) {
        return n === 0 ? 1 : n * factorial(n - 1);
    }
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}

console.timeEnd('isNotRecursive');
