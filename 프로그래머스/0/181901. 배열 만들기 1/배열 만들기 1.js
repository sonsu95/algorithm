function solution(n, k) {
    return new Array(Math.floor(n / k)).fill(0).map((_, idx) => k * (idx + 1));
}