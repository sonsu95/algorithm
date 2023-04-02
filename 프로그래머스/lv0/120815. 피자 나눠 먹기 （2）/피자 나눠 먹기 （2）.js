const GCD = (a, b) => {
    return b === 0 ? a : GCD(b, a % b)
}

function solution(n) {
    return n / GCD(6, n)
}