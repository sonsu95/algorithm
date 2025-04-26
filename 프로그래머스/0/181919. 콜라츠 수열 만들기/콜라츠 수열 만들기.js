function solution(n) {
    if (n === 1) return [1];
    
    const next = n % 2 === 0 ? n / 2 : 3 * n + 1;
    
    return [n, ...solution(next)];
}