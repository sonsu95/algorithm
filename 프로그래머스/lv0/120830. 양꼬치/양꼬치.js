function solution(n, k) {
    let payDrinkCnt = Math.floor(n / 10);
    return 12000 * n + 2000 * (k - payDrinkCnt);
}